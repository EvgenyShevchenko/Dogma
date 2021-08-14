import {configureStore,combineReducers} from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    toolkit:loginReducer
})

export const store = configureStore({
    reducer: rootReducer
})