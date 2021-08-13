import {configureStore,combineReducers} from "@reduxjs/toolkit";
import loginReduser from "./redusers/loginReduser";

const rootReduser = combineReducers({
    toolkit:loginReduser
})

export const store = configureStore({
    reducer: rootReduser
})