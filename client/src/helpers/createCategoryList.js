const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
        options.push({
            value: category._id,
            name: category.name,
            type:category.type,
            children: category.children ? category.children : null
        })
    }
    return options
}



export default createCategoryList