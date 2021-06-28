const url="http://localhost:5000"
export const api=`${url}/api`
export const generatePublicUrl=(filename)=>{
    return `${url}/public/${filename}`
}
export const publicUrl=url;