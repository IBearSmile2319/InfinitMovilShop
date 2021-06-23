import axios from "../helpers/axios"
import { categoryConstants } from "./constants"

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST })
        try {
            await axios.get('/category/getcategory')
                .then(res => {
                    const { categoryList } = res.data
                    dispatch({
                        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                        payload: { categories: categoryList }
                    })
                }).catch(err => {
                    dispatch({
                        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                        payload: { error: err.response.errors }
                    })
                })
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST })
        try {
            axios.post('/category/create', form)
                .then(res => {
                    dispatch({
                        type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                        payload: { category: res.data.category }
                    })
                }).catch(err => {
                    dispatch({
                        type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                        payload: { error: err.response.errors }
                    })
                })
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const updateCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.UPDATE_CATEGORIES_REQUEST });
        await axios.post('/category/update', form)
            .then(res => {
                // Poner alerta
                dispatch({ type: categoryConstants.UPDATE_CATEGORIES_SUCCESS });
                dispatch(getAllCategory());
            }).catch(err => {
                const { errors } = err.response;
                dispatch({
                    type: categoryConstants.UPDATE_CATEGORIES_FAILURE,
                    payload: { error: errors }
                });
            })
    }
}

export const deleteCategories = (id) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.DELETE_CATEGORIES_REQUEST });
        await axios.post(`/category/delete`, id)
            .then(res => {
                dispatch(getAllCategory());
                dispatch({ type: categoryConstants.DELETE_CATEGORIES_SUCCESS });
            }).catch(err => {
                const { errors } = err.response;
                dispatch({
                    type: categoryConstants.DELETE_CATEGORIES_FAILURE,
                    payload: { error: errors }
                });
            })
    }
}
