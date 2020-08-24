import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // 👈 Local storage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'], // 👈 No reason to persist the user because of firebase auth; firebase handles the user
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
