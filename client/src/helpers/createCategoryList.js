export const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
        options.push({
            value: category._id,
            name: category.name,
            type:category.type?category.type:'',
            children: category.children ? category.children : null
        })
    }
    return options
}
export const linearCreateCategoryList = (categories, options = []) => {
    for (let category of categories) {
        options.push({
            value: category._id,
            name: category.name,
            type:category.type,
            
        })
        if(category.children.length>0){
            createCategoryList(category.children,options)
        }
    }
    return options
}