import {createAction,createReducer} from "@reduxjs/toolkit";


const initialState = {
    login: 'developer21',
    password: '123456'
}

export const loginAction = createAction('LOGINACTION')

export default createReducer(initialState,{
[loginAction]: function (state) {
    state.login = state
}
})