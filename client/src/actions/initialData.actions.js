import axios from "../helpers/axios"
import { bannerConstants, categoryConstants, orderConstants, productConstants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
        // dispatch({type:initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST})
        await axios.post('/initialdata')
            .then(res => {
                const { categories, products, orders,banners } = res.data
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories }
                })
                dispatch({
                    type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                    payload: { products }
                })
                dispatch({
                    type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                    payload: { orders },
                });
                dispatch({
                    type: bannerConstants.GET_BANNER_SUCCESS,
                    payload: { banners },
                });
            }).catch(err => {
                // dispatch({
                //     type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                //     payload:
                // })
            })
    }
}