import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { UserReducer } from "./reducers/UserReducer";
import { thunk } from "redux-thunk";


const persistUserConfig = {
    key:'user',
    storage: AsyncStorage,
    whitelist: ['user', 'userExists', 'isAuthenticated'],
}

const persistUserReducer = persistReducer(persistUserConfig, UserReducer);

const store = configureStore({
    reducer:{
        user: persistUserReducer,
    },
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);

export default store;