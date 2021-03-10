import './App.css';
import React from 'react'
import {NavLink, Route, Switch} from "react-router-dom";
import AuthPage from "./components/authPage/AuthPage";
import InfoPage from "./components/infoPage/InfoPage";
import AdminPage from "./components/adminPage/AdminPage";
import {connect} from "react-redux";

const App = ({isAdmin}) => {
    return (
        <div className="App">
            <div className="navMenu">
                <div>
                    <NavLink to={'/'}>Auth </NavLink>
                </div>
                <div>
                    <NavLink to={'/info-page'}>Info page</NavLink>
                </div>
                <div>
                    {isAdmin
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
        isAdmin: state.auth.isAdmin
    }
}

export default connect(mapStateToProps)(App);