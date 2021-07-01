const Product = require('../models/productModel')
const slugify = require('slugify')
const Category = require('../models/categoryModel')
exports.addProductController = async (req, res, next) => {
    const {
        name, price, description, category, quantity
    } = req.body
    let productPictures = [];
    // let categories = [];
    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }
    // if (req.body.category.length > 0) {
    //     categories = req.body.category.map(async ca => {
    //         await Category.findOne({ name: ca })
    //             .exec((error, category) => {
    //                 return { id:category._id}
    //             })
    //     })

    // }
    const product = new Product({
        name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    })
    product.save((error, product) => {
        if (error) return res.status(400).json({ error })
        if (product) {
            res.status(201).json({ product,message:"Producto agregado." })
        }
    })
}

exports.getProductBySlug = async (req, res) => {
    const { slug } = req.params
    await Category.findOne({ slug: slug })
        .select('_id')
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ errors: error })
            }
            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
                        if (error) {
                            return res.status(400).json({ errors: error })
                        }
                        if (products.length > 0) {
                            res.status(200).json({
                                products,
                                priceRange: {
                                    under: 5,
                                    under5: 5,
                                    under10: 10,
                                    under20: 20,
                                    under50: 50,
                                    under100: 100,
                                    under200: 200,
                                    under400: 400,
                                    under600: 600,
                                    under800: 800,
                                    under1000:1000,
                                    under1400:1400,
                                    under1700:1700,
                                    under2000:2000,
                                    under2500:2500,
                                },
                                productsByPrice: {
                                    under: products.filter(product => product.price ? product.price <= 5 : null),
                                    under5: products.filter(product => product.price ? product.price > 5 && product.price <= 10 : null),
                                    under10: products.filter(product => product.price ? product.price > 10 && product.price <= 20 : null),
                                    under20: products.filter(product => product.price ? product.price > 20 && product.price <= 50 : null),
                                    under50: products.filter(product => product.price ? product.price > 50 && product.price <= 100 : null),
                                    under100: products.filter(product => product.price ? product.price > 100 && product.price <= 200 : null),
                                    under200: products.filter(product => product.price ? product.price > 200 && product.price <= 400 : null),
                                    under400: products.filter(product => product.price ? product.price > 400 && product.price <= 600 : null),
                                    under600: products.filter(product => product.price ? product.price > 600 && product.price <= 800 : null),
                                    under800: products.filter(product => product.price ? product.price > 800 && product.price <= 1000 : null),
                                    under1000: products.filter(product => product.price ? product.price > 1000 && product.price <= 1400 : null),
                                    under1400: products.filter(product => product.price ? product.price > 1400 && product.price <= 1700 : null),
                                    under1700: products.filter(product => product.price ? product.price > 1700 && product.price <= 2000 : null),
                                    under2000: products.filter(product => product.price ? product.price > 2000 && product.price <= 2500 : null),
                                    under2500: products.filter(product => product.price ? product.price > 2500 && product.price <= 3000 : null),
                                }
                            })
                        }

                    })
            }
        })
}
exports.getProductByCategory = async (req, res) => {
    const { category } = req.params
    await Category.findOne({ name: category })
        .select('_id')
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ errors: error })
            }
            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
                        if (error) {
                            return res.status(400).json({ errors: error })
                        }
                        if (products.length > 0) {
                            res.status(200).json({
                                ...products
                            })
                        }

                    })
            }
        })
}

exports.getProductDetailsById = (req, res) => {
    const { productId } = req.params;
    if (productId) {
        Product.findOne({ _id: productId }).exec((error, product) => {
            if (error) return res.status(400).json({ error});
            if (product) {
                res.status(200).json({ product });
            }
        });
    } else {
        return res.status(400).json({ error: "Params required" });
    }
};

// new update
exports.deleteProductById = (req, res) => {
    const { productId } = req.body.payload;
    if (productId) {
        Product.deleteOne({ _id: productId }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(202).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find({ createdBy: req.user._id })
        .select("_id name price quantity slug description offer productPictures category")
        .populate({ path: "category", select: "_id name" })
        .exec();

    res.status(200).json({ products });
};