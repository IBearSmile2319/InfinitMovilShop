import authReducer from './auth.reducers'
import userReducers from './user.reducers'
import productReducers from './product.reducers'
import categoryReducers from './category.reducers'
import orderReducers from './order.reducers'

import {combineReducers} from 'redux'
import cartReducers from './cart.reducers'
import pageReducers from './page.reducers'
import bannersReducers from './banners.reducers'
const rootReducer=combineReducers({
    auth:authReducer,
    user:userReducers,
    category:categoryReducers,
    product:productReducers,
    order:orderReducers,
    cart:cartReducers,
    page:pageReducers,
    banners:bannersReducers
})

export default rootReducer