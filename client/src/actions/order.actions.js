import axios from "../helpers/axios"
import { orderConstants } from "./constants";

export const getCustomerOrders = () => {
    return async (dispatch) => {
        dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
        try {
            await axios.post("/order/getCustomerOrders")
            .then(res=>{
                const { orders } = res.data;
                dispatch({
                    type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                    payload: { orders },
                });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
                    payload: { error },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateOrder = (payload) => {
    return async (dispatch) => {
        dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_REQUEST });
        try {
            await axios.post("/order/update", payload)
            .then(res=>{
                dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_SUCCESS });
                dispatch(getCustomerOrders());
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: orderConstants.UPDATE_CUSTOMER_ORDER_FAILURE,
                    payload: { error },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};