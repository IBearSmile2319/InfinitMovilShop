import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import Perfil from '../pages/Perfil'
import { Switch, Route } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Activate from '../pages/Activate'
import ProductInfo from '../pages/ProductInfo'
import PrivateRoutes from './PrivateRoutes'
import Dashboard from '../pages/Admin/Dashboard'
import Category from '../pages/Admin/Category'
import Users from '../pages/Admin/Users'

const Routes = () => {
    return (
        <Switch>
            <PrivateRoutes exact path="/admin/Users" component={Users} />
            <PrivateRoutes exact path="/admin/categories" component={Category} />
            <PrivateRoutes exact path="/admin/dashboard" component={Dashboard} />
            <PrivateRoutes exact path="/admin" component={Dashboard} />
            <Route exact path="/users/active/:token" component={Activate} />
            <Route exact path="/product" component={ProductInfo} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/perfil/:nombre" component={Perfil} />
            <Route path="/" exact component={HomePage} />
            <Route component={Error} />
        </Switch>
    )
}

export default Routes
