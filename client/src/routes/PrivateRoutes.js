
import { Redirect, Route } from "react-router-dom"
// import Error from "../pages/Error"

const PrivateRoutes = ({component:Component,...rest}) => {
    
    
    return <Route {...rest} component={props=>{
        const token=window.localStorage.getItem('token')
        const user =localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):{role:''}
        if(user.role==="admin" && token){
            return <Component {...props}/>
        }else{
            return <Redirect to="/"/>
            // return <Error/>
        }
    }}/>
}

export default PrivateRoutes
