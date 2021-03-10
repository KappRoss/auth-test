import {ADMIN_AUTH, AUTH_ERROR, AUTH_LOG_IN, AUTH_SIGN_UP, LOG_OUT} from "./actionsType";
import {users} from "../../UserStateFile/users";

const logIn = () => ({type: AUTH_LOG_IN})

const signUp = (login, password) => (
    {
        type: AUTH_SIGN_UP,
        login,
        password
    }
)

const adminAuth = () => (
    {
        type: ADMIN_AUTH
    }
)

const error = () => ({type: AUTH_ERROR})

const setLogOut = () => ({type: LOG_OUT})

export const auth = (login, password, isLogin, isAdmin) => {
    return (dispatch, getState) => {



        let response = users



        //////////admin/////////////
        if (isAdmin && isLogin) {
            dispatch(adminAuth())
        }

        ///////log in//////////////
        if (isLogin) {
            const state = getState()

            let answer = state.auth.users.filter(user =>  user.userName === login && user.userPass === password)
            answer.length === 1 ? dispatch(logIn()) : dispatch(error())

        } else {
            //////////sign in /////////
            dispatch(signUp(login, password))
        }
    }
}

export const logOut = () => {
    return dispatch => {
        dispatch(setLogOut())
    }
}