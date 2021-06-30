const url="https://infinitm.herokuapp.com"
export const api=`${url}/api`
export const generatePublicUrl=(filename)=>{
    return `${url}/public/${filename}`
}
export const publicUrl=url;