import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlide";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from 'redux-persist';
import userReducer from '../features/user/userSlice.js'
import authReducer from '../features/auth/authSlice.js'                                                                                                                                                                                            
import productReducer from "../features/product/productSlice.js"



const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddlewire) => 
    getDefaultMiddlewire({
        serializableCheck: false,
    }),
    devTools: true //set true only in development mode
    
})

export const persistor = persistStore(store)