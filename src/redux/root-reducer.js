import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reucers'

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
})