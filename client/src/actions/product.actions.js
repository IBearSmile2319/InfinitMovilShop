import { message } from "antd";
import axios from "../helpers/axios"
import { productConstants } from "./constants";
const getProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
            await axios.post(`product/getProducts`).then(res => {
                const { products } = res.data;
                dispatch({
                    type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                    payload: { products },
                });
            }).catch(err => {
                dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
            })
        } catch (error) {
            console.log(error);
        }
    };
};
export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
            await axios.post(`product/getProducts`).then(res => {
                const { products } = res.data;
                dispatch({
                    type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                    payload: { products },
                });
            }).catch(err => {
                dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
            })
        } catch (error) {
            console.log(error);
        }
    };
};
export const addProduct = form => {
    return async dispatch => {
        try {
            dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
            await axios.post('/product/create', form)
                .then(res => {
                    message.success(res.data.message)
                    dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
                    dispatch(getProducts());
                }).catch(err => {
                    dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
                })
        } catch (error) {
            console.log(error);
        }
    }
}

// new action
export const deleteProductById = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
            await axios.delete(`product/deleteProductById`, {
                data: { payload },
            }).then(res => {
                dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
                dispatch(getProducts());
            }).catch(err => {
                const { errors } = err.response.data;
                dispatch({
                    type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error:errors,
                    },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};

// frontend

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        await axios.get(`/products/${slug}`)
        .then(res=>{
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
            // dispatch(getProducts());
        })
        
    }
}
// export const getProductsByCategory = (category) => {
//     return async dispatch => {
//         const res = await axios.get(`/products/category/${category}`)
//         .then(res=>{
//             console.log(res.data)
//         })
//     }
// }

export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axios.get(`/page/${cid}/${type}`);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch(error) {
            console.log(error)
        }

    }
}

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        
        try {
            const { productId } = payload.params;
            await axios.get(`/product/${productId}`)
            .then(res=>{
                dispatch({
                    type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                    payload: { productDetails: res.data.product }
                });
            }).catch(err=>{
                dispatch({
                    type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                    payload: { error: err.response.data.error }
                });
            })
        
        } catch(error) {
            
        }

    }
}