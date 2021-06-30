
const Category = require('../models/categoryModel')
const Product = require('../models/productModel')
const Banners = require('../models/bannerModel')
const Order=require('../models/orderModel')
const createCategories=(categories,parentId=null)=>{

    const categoryList=[]
    let category;
    if(parentId==null){
        category=categories.filter(cat=>cat.parentId==undefined)
    }else{
        category=categories.filter(cat=>cat.parentId==parentId)
    }
    for(let cate of category){
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            slug:cate.slug,
            parentId:cate.parentId,
            type:cate.type?cate.type:'',
            children:createCategories(categories,cate._id)
        })
    }
    return categoryList
}
exports.initialDataControllers=async(req,res)=>{
    const categories= await Category.find({}).exec()
    const products= await Product.find({})
    .select('_id name price quantity slug description offer productPictures category')
    .populate({path:'category',select:'_id name'})
    .exec()
    const orders = await Order.find({})
    .populate("items.productId", "name productPictures")
    .exec();
    const banners=await Banners.find({}).exec()
    res.status(200).json({
        categories:createCategories(categories),
        products,
        banners,
        orders
    })

}