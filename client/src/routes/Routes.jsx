import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import Perfil from '../pages/Perfil'
import {Switch,Route} from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Activate from '../pages/Activate'
import ProductInfo from '../pages/ProductInfo'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/users/active/:token" render={props=><Activate {...props}/>}/>
            <Route exact path="/product" render={props=><ProductInfo {...props}/>}/>
            <Route exact path="/signup" render={props=><Signup {...props}/>}/>
            <Route exact path="/signin" render={props=><Signin {...props}/>}/>
            <Route exact path="/perfil/:nombre" render={props=><Perfil {...props}/>}/>
            <Route exact path="/" render={props=> <HomePage {...props}/>}/>
            <Route render={props=><Error {...props}/>}/>
        </Switch>
    )
}

export default Routes
