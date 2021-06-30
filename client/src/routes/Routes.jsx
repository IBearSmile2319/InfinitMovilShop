import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import Perfil from '../pages/Perfil'
import { Switch, Route } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Activate from '../pages/Activate'
import PrivateRoutes from './PrivateRoutes'
import Dashboard from '../pages/Admin/Dashboard'
import Category from '../pages/Admin/Category'
import Users from '../pages/Admin/Users'
import Products from '../pages/Admin/Products'
import PublicRoutes from './PublicRoutes'
import Pages from '../pages/Admin/Pages'
import ProductListPage from '../pages/ProductListPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import Banners from '../pages/Admin/Banners'
import OrderPage from '../pages/OrderPage'
import Orders from '../pages/Admin/Orders'
import OrderDetailsPage from '../pages/OrderDetailsPage'

const Routes = () => {
    return (
        <Switch>
            <PrivateRoutes exact path="/admin/orders" component={Orders}/>
            <PrivateRoutes exact path="/admin/banners" component={Banners}/>
            <PrivateRoutes exact path="/admin/pages" component={Pages} />
            <PrivateRoutes exact path="/admin/products" component={Products} />
            <PrivateRoutes exact path="/admin/users" component={Users} />
            <PrivateRoutes exact path="/admin/categories" component={Category} />
            <PrivateRoutes exact path="/admin/dashboard" component={Dashboard} />
            <PrivateRoutes exact path="/admin" component={Dashboard} />
            {/* User Routes */}
            <PublicRoutes exact path="/account/profile" component={Perfil} />
            <PublicRoutes exact path="/order_details/:orderId" component={OrderDetailsPage} />
            {/* Product Routes */}
            <PublicRoutes exact path="/account/orders" component={OrderPage}/>
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/product/:productSlug/:productId/p"component={ProductDetailsPage}/>
            <Route exact path="/product/:slug" component={ProductListPage} />
            {/* Initial routes */}
            <Route exact path="/users/active/:token" component={Activate} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/" exact component={HomePage} />
            <Route component={Error} />
        </Switch>
    )
}

export default Routes
