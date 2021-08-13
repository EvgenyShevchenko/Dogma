import {createAction,createReducer} from "@reduxjs/toolkit";


const initialState = {
    login: ''
}

export const loginAction = createAction('LOGINACTION')

export default createReducer(initialState,{
[loginAction]: function (state) {
    state.login = state
}
})