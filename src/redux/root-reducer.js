import { combineReducers } from "redux"
import userReducer from "./userReducer/user-reducer"
import cartReducer from "./cartReducer/cartReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import directoryReducer from "./directoryReducer/directoryReducer"
import shopReducer from "./shopReducer/shopReducer"


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collections: shopReducer
})
export default persistReducer(persistConfig, rootReducer)