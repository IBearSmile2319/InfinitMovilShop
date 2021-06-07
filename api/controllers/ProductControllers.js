const Product=require('../models/productModel')
const slugify=require('slugify')

exports.addProductController=(req,res,next)=>{
    const {
        name,price,description,category,quantity,createdBy
    } =req.body
    let productPictures=[];
    if(req.files.length>0){
        productPictures=req.files.map(file=>{
            return {img:file.filename}
        })
    }
    const product=new Product({
        name,
        slug:slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy:req.user._id
    })
    product.save((error,product)=>{
        if(error) return res.status(400).json({error})
        if(product){
            res.status(201).json({product})
        }
    })
}