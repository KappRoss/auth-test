import React, {useState} from 'react'
import {connect} from "react-redux";
import {auth, logOut} from "../../store/actions/auth";
import {Box, Button, Container, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    loginForm: {
        padding: '20px'
    },
    button: {
        marginTop: '10px',
        marginRight: '10px'
    },
    logout: {
        padding: 20
    }
})

const AuthPage = ({adminLogin, adminPassword, auth, isAuth, isAdmin, error, success, logOut}) => {
    const classes = useStyles()
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
        if (event.key === 'Enter') {
            loginHandler()
        }
    }

    const kayPressHandler = (event) => {
        if (event.key === 'Enter') {
            loginHandler()
        }
    }

    return (
        <Container maxWidth="sm">
            {
                isAuth
                    ? <div className={classes.logout}>
                        <Typography>
                            You are log in as {
                            isAdmin
                                ? <span>'ADMIN'</span>
                                : <span>'USER'</span>
                        }
                        </Typography>

                        <Button
                            onClick={logOut}
                            className={classes.button}
                            variant="contained"
                        >Log out</Button>
                    </div>
                    : <div>
                        <h1>Auth Page</h1>
                        <Box
                            border={2}
                            borderRadius={10}
                            className={classes.loginForm}
                        >
                            <TextField
                                autoFocus
                                margin={'dense'}
                                id={'name'}
                                label={'Login'}
                                type={'email'}
                                fullWidth
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                onKeyPress={kayPressHandler}
                            />
                            <TextField
                                autoFocus
                                margin={'dense'}
                                id={'pass'}
                                label={'Password'}
                                type={'password'}
                                fullWidth
                                value={password}
                                onChange={handleKeyPress}
                                onKeyPress={kayPressHandler}
                            />
                            {
                                error && <span style={{color: 'red'}}>Wrong pass or login</span>
                            }

                            <Button
                                onClick={() => auth(login, password, false, false)}
                                className={classes.button}
                                variant="outlined"
                            >Sign up</Button>

                            <Button
                                onClick={loginHandler}
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                            >Log in</Button>
                        </Box>

                        {
                            success ? <span>Sign up success! Now log in!</span> : null
                        }
                    </div>
            }
        </Container>
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

export default connect(mapStateToProps,
    {
        auth, logOut
    }
)(AuthPage)

