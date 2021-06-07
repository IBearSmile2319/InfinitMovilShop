import axios from "../helpers/axios"
import { authConstants } from "./constants"
import { toast } from 'react-toastify'
export const login=(user)=>{
    console.log(user)
    return async(dispatch)=>{
        dispatch({type:authConstants.LOGIN_REQUEST});
        axios.post('/signin',{
            ...user  
        }).then(res=>{
            toast.success(res.data.message)
            console.log(res.data.message)
            const {token,user}=res.data;
            localStorage.setItem('token',token)
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }).catch(err=>{
            toast.error(err.response.data.errors)
                dispatch({
                    type:authConstants.LOGIN_FAILURE,
                    payload:{error:err.response.data.errors}
                })
        })
        
    }
}

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem('token')
        if(token){
            const user=JSON.parse(localStorage.getItem('user'))
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload:{errors:"Failed to login"}
            })
        }
    }
}

export const Signout =()=>{
    return async dispatch=>{
        localStorage.clear()
        dispatch({
            type:authConstants.LOGOUT_REQUEST
        })
    }
}