import axios from "../helpers/axios"
import { bannerConstants } from "./constants";

export const addBanners = form => {
    return async dispatch => {
        try {
            dispatch({ type: bannerConstants.ADD_BANNER_REQUEST });
            await axios.post('/banners/create', form)
                .then(res => {
                    dispatch({ type: bannerConstants.ADD_BANNER_SUCCESS });
                }).catch(err => {
                    dispatch({ type: bannerConstants.ADD_BANNER_FAILURE });
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllBanner = () => {
    return async dispatch => {
        dispatch({ type: bannerConstants.GET_BANNER_REQUEST })
        try {
            await axios.get('/banners/getbanners')
                .then(res => {
                    const { banners } = res.data
                    dispatch({
                        type: bannerConstants.GET_BANNER_SUCCESS,
                        payload: { banners }
                    })
                }).catch(err => {
                    dispatch({
                        type: bannerConstants.GET_BANNER_FAILURE,
                        payload: { error: err.response.errors }
                    })
                })
        } catch (error) {
            console.log(error.response);
        }
    }
}