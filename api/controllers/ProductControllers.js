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
                                ...products,
                                productsByPrice: {
                                    under5: products.filter(product => product.price ? product.price <= 5 : null),
                                    under10: products.filter(product => product.price ? product.price > 5 && product.price <= 10 : null),
                                    under20: products.filter(product => product.price ? product.price > 10 && product.price <= 20 : null),
                                    under50: products.filter(product => product.price ? product.price > 20 && product.price <= 50 : null),
                                    under1s: products.filter(product => product.price ? product.price > 50 && product.price <= 100 : null),
                                    under2s: products.filter(product => product.price ? product.price > 100 && product.price <= 200 : null),
                                    under3s: products.filter(product => product.price ? product.price > 200 && product.price <= 300 : null),
                                    under1k: products.filter(product => product.price ? product.price > 300 && product.price <= 1000 : null),
                                    under2k: products.filter(product => product.price ? product.price > 1000 && product.price <= 2000 : null),
                                    under3k: products.filter(product => product.price ? product.price > 2000 && product.price <= 3000 : null),
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