import React, {useState} from 'react'
import s from './authPage.module.css'
import {connect} from "react-redux";
import {auth, logOut} from "../../store/actions/auth";

const AuthPage = ({adminLogin, adminPassword, auth, isAuth, isAdmin, error, success, logOut}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        if (login === adminLogin && password === adminPassword) {
            auth(login, password, true, true)
        } else {
            auth(login, password, true, false)
        }
    }

    const handleKeyPress = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
        if(event.key === 'Enter'){
            loginHandler()
        }
    }

    const kayPressHandler = (event) => {
        if(event.key === 'Enter'){
            loginHandler()
        }

    }

    return (
        <div className={s.AuthPage}>
            {
                isAuth
                    ? <div>
                        You are log in as {
                        isAdmin
                            ? <span>'ADMIN'</span>
                            : <span>'USER'</span>
                    }
                        <button onClick={logOut}>Log out</button>
                    </div>
                    : <div>
                        <h1>Auth Page</h1>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            onKeyPress={kayPressHandler}
                        >
                            <div>
                                <label htmlFor="login">Your Email/Nick</label>
                                <input
                                    type="text"
                                    id={'login'}
                                    value={login}
                                    onChange={e => setLogin(e.target.value) }
                                    onKeyPress={kayPressHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Your password</label>
                                <input
                                    type="password"
                                    id={'password'}
                                    value={password}
                                    onChange={handleKeyPress}
                                    onKeyPress={kayPressHandler}
                                />
                                {
                                    error ? <span style={{color: 'red'}}>Wrong pass or login</span> : null
                                }
                            </div>
                        </form>
                        <button onClick={loginHandler}>Log in</button>
                        <button onClick={() => auth(login, password, false, false)}>Sign up</button>
                        {
                            success ? <span>Sign up success! Now log in!</span> : null
                        }
                    </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        adminLogin: state.auth.adminLogin,
        adminPassword: state.auth.adminPassword,
        isAdmin: state.auth.isAdmin,
        error: state.auth.error,
        success: state.auth.success
    }
}

export default connect(mapStateToProps, {auth, logOut})(AuthPage)

