import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlide";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from 'redux-persist';
import userReducer from '../features/user/userSlice'
import authReducer from '../features/auth/authSlice'                                                                                                                                                                                            
import { generalApi } from "../features/product/generalApi";



const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    [generalApi.reducerPath]: generalApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddlewire) => 
    getDefaultMiddlewire().concat(generalApi.middleware),
    devTools: true //set true only in development mode
    
})

export const persistor = persistStore(store)