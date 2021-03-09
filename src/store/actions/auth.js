import {AUTH_LOG_IN} from "./actionsType";

export const authLogin = (login, password, token) => {
  return {
    type: AUTH_LOG_IN,
    login,
    password,
    token
  }
}