import {combineReducers} from 'redux'
import {authReducer} from "./reducer/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
})