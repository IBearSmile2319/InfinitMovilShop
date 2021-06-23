import { Redirect, Route } from "react-router-dom"
const PublicRoutes = ({component:Component,...rest}) => {
    return <Route {...rest} component={props=>{
        const token=window.localStorage.getItem('token')
        if(token){
            return <Component {...props}/>
        }else{
            return <Redirect to="/"/>
        }
    }}/>
}

export default PublicRoutes
