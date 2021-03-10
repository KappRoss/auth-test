import {ADMIN_AUTH, AUTH_ERROR, AUTH_LOG_IN, AUTH_SIGN_UP, LOG_OUT} from "../actions/actionsType";

const initialState = {
    isAuth: false,      // for local
    token: null,        // for simulate. (token from src/UserStateFile/users)
    users: [
        {
            userName: 'k@mail.ru',
            userPass: '1234'
        },
        {
            userName: 'test@mail.ua',
            userPass: '1234'
        }
    ],

    adminLogin: 'admin',
    adminPassword: 'admin',
    isAdmin: false,
    error: false,
    success: false
}

export default function authReducer(state = initialState, actions) {
    switch (actions.type) {
        case ADMIN_AUTH :
            return {
                ...state,
                isAdmin: true,
                isAuth: true
            }
        case AUTH_LOG_IN:
            return {
                ...state,
                isAuth: true,
                error: false,
                token: actions.idToken
            }
        case AUTH_SIGN_UP:
            return {
                ...state,
                users: [...state.users, {
                    userName: actions.login,
                    userPass: actions.password
                }],
                success: true,
                error: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
                success: false,
                isAdmin: false,
                error: false
            }
        default:
            return state
    }
}

