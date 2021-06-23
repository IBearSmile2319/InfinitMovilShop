import axios from "../helpers/axios";
import { pageConstants } from "./constants";

export const createPage = (form) => {
    return async dispatch => {
        dispatch({ type: pageConstants.CREATE_PAGE_REQUEST });
        try{
            await axios.post('/page/create', form)
            .then(res=>{
                dispatch({
                    type: pageConstants.CREATE_PAGE_SUCCESS,
                    payload: { page: res.data.page }
                });
            }).catch(err=>{
                dispatch({
                    type: pageConstants.CREATE_PAGE_FAILURE,
                    payload: { error: err.response.data.errors }
                });
            })
        }catch(error){
            console.log(error)
        }
    }
}