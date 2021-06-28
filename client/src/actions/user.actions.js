import axios from "../helpers/axios"
import { userRegisterConstants, userActivateConstants, userConstants, cartConstants } from "./constants"
import { toast } from 'react-toastify'
import { Redirect } from "react-router"


export const register = (user) => {
    return async (dispatch) => {
        dispatch({ type: userRegisterConstants.USER_REGISTER_REQUEST });
        axios.post('/signup', {
            ...user
        }).then(res => {
            const { message } = res.data;
            toast.success(message)
            dispatch({
                type: userRegisterConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            })
        }).catch(err => {
            const { errors } = err.response.data
            toast.error(errors)
            dispatch({
                type: userRegisterConstants.USER_REGISTER_FAILURE,
                payload: { error: errors }
            })

        })

    }
}

export const activate = (token) => {
    return async (dispatch) => {
        dispatch({ type: userActivateConstants.USER_ACTIVATE_REQUEST });
        axios.post('/activate', {
            token
        }).then(res => {
            <Redirect to="/signin" />
            const { message } = res.data;
            toast.success(message)
            dispatch({
                type: userActivateConstants.USER_ACTIVATE_SUCCESS,
                payload: { message }
            })
        }).catch(err => {
            toast.error(err.response.data.errors)
            dispatch({
                type: userActivateConstants.USER_ACTIVATE_FAILURE,
                payload: { error: err.response.data.errors }
            })
        })
    }
}

// frontend

export const getAddress = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
            await axios.post(`/user/getaddress`)
            .then(res=>{
                const {
                    userAddress: { address },
                } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const addAddress = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
            await axios.post(`/user/address/create`, { payload })
            .then(res=>{
                const {
                    address: { address },
                } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            })
            
        } catch (error) {
            console.log(error);
        }
    };
};

export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST })
            await axios.post(`/addOrder`, payload)
            .then(res=>{
                const { order } = res.data;
                dispatch({
                    type: cartConstants.RESET_CART,
                });
                dispatch({
                    type: userConstants.ADD_USER_ORDER_SUCCESS,
                    payload: { order },
                });
                // const {
                //   address: { address },
                // } = res.data;
                // dispatch({
                //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                //   payload: { address },
                // });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.GET_USER_ORDER_REQUEST })
            await axios.get(`/getOrders`)
            .then(res=>{
                const { orders } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_SUCCESS,
                    payload: { orders },
                });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: { error },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST })
            await axios.post(`/getOrder`, payload)
            .then(res=>{
                const { order } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
                    payload: { order },
                });
            }).catch(err=>{
                const { error } = err.response;
                dispatch({
                    type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
                    payload: { error },
                });
            })
            
        } catch (error) {
            console.log(error);
        }
    };
};