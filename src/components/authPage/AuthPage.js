import React, {useState} from 'react'
import s from './authPage.module.css'

const AuthPage = props => {

    const [value, setValue] = useState('')

    const handleSubmit = () => {

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
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Your password</label>
                        <input
                            type="password"
                            id={'password'}
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </form>
                <button>Login</button>
                <button>Registr</button>
            </div>
        </div>
    )
}

export default AuthPage