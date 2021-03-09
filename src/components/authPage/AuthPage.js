import React, {useState} from 'react'
import s from './authPage.module.css'
import {connect} from "react-redux";
import {authLogin} from "../../store/actions/auth";

const AuthPage = props => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')



    const loginHandler = () => {
        let token = Math.random()

        props.authLogin(login, password, token)

        if (props.isAuth) {
            props.history.push('/info-page')
        } else {
            alert('Wrong password or email!')
        }

    }

    return(
        <div className={s.AuthPage}>
            <div>
                <h1>Auth Page</h1>
                <form onSubmit={event => event.preventDefault()}>
                    <div >
                        <label htmlFor="login">Your Email/Nick</label>
                        <input
                            type="text"
                            id={'login'}
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Your password</label>
                        <input
                            type="password"
                            id={'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <button onClick={loginHandler}>Log in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        adminLogin: state.auth.adminLogin,
        adminPassword: state.auth.adminPassword
    }
}

export default connect(mapStateToProps, {authLogin})(AuthPage)

