const Category = require('../models/categoryModel')
const slugify = require('slugify')

const createCategories = (categories, parentId = null) => {

    const categoryList = []
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            type: cate.type,
            children: createCategories(categories, cate._id)
        })
    }
    return categoryList
}
exports.addCategoryController = (req, res, next) => {
    const { name, parentId } = req.body

    const categoryObj = {
        name,
        slug: slugify(name),
    }
    if (req.file) {
        categoryObj.categoryImage = process.env.API + req.file.filename
    }
    if (parentId) {
        categoryObj.parentId = parentId
    }
    const cat = new Category(categoryObj)
    cat.save((error, category) => {
        if (error) return res.status(400).json({ errors: error.keyValue })
        if (category) {
            return res.status(201).json({ category })
        }
    })

}

exports.getCategoryController = (req, res, next) => {
    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(400).json({ errors: error })
            if (categories) {
                const categoryList = createCategories(categories)
                res.status(200).json({ categoryList })
            }
        })
}

exports.updateCategoriesController = async (req, res) => {
    const { key, name, parentId, type } = req.body
    let category = {
        name,
        slug: `${slugify(name)}`,

    }
    if (type !== "") {
        category.type = type
    }
    if (parentId !== "") {
        category.parentId = parentId
    }
    const updateCategory = await Category.findOneAndUpdate({ _id: key }, category, { new: true })

    return res.status(201).json({ updateCategory })
}

exports.DeleteCategoriesController = async (req, res) => {
    const { key, name, parentId } = req.body
    const deleteCategories = await Category.findOneAndRemove({ _id: key })
    res.status(201).json({ deleteCategories })
}