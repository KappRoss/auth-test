import './App.css';
import React from 'react'
import {NavLink, Route, Switch} from "react-router-dom";
import AuthPage from "./components/authPage/AuthPage";
import InfoPage from "./components/infoPage/InfoPage";
import AdminPage from "./components/adminPage/AdminPage";
import {connect} from "react-redux";

const App = ({isAuth}) => {
    return (
        <div className="App">
            <h1>AUTH-test</h1>
            <div className="navMenu">
                <div>
                    <NavLink to={'/'}>Auth </NavLink>
                </div>
                <div>
                    <NavLink to={'/info-page'}>Info page</NavLink>
                </div>
                <div>
                    {isAuth
                        ? <NavLink to={'/admin-page'}>Admin page</NavLink>
                        : null
                    }
                </div>
            </div>
            <Switch>
                <Route exact path={'/info-page'} component={InfoPage}/>
                <Route exact path={'/admin-page'} component={AdminPage}/>
                <Route exact path={'/'} component={AuthPage}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(App);
