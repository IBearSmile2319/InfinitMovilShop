import axios from "../helpers/axios"

export const addLocale=(form)=>{
    return async dispatch => {
        try {
            await axios.get('/Localization/add',form)
            .then(res=>{
                console.log(res.data.locale)
            }).catch(err=>{
                console.log(err.response.data.errors)
            })
        } catch (error) {
            console.log(error.response);
        }
    }
}