import {AUTH_LOG_IN} from "../actions/actionsType";

const initialState = {
  isAuth: false,
  token: '',
  users: [
    {
      userName: 'k@mail.ru',
      userPass: '1234'
    }
  ],
  adminLogin: 'admin',
  adminPassword: 'admin'
}

export function authReducer(state = initialState, actions) {
  switch (actions.type) {
    case AUTH_LOG_IN:
      return {
        ...state,
        token: actions.token,

      }
    default:
      return state
  }
}