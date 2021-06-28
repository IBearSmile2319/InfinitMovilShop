import axios from 'axios'
import { api } from '../urlConfig'
import store from '../store'
import { authConstants } from '../actions/constants'
const token = window.localStorage.getItem('token')


const axiosInstance=axios.create({
    
    baseURL:api,
    headers:{
        'Authorization': token ? token : ''
    }
})
axiosInstance.interceptors.request.use((req)=>{
    const {auth}=store.getState()
    if(auth.token){
        req.headers.Authorization=auth.token
    }
    return req
})
axiosInstance.interceptors.response.use((res)=>{
    return res
},(error)=>{
    const status = error.response ? error.response.status : 500;
    if(status===500 || status===400){
        localStorage.clear()
        store.dispatch({type:authConstants.LOGOUT_SUCCESS})
    }
    return Promise.reject(error)
})
export default axiosInstance