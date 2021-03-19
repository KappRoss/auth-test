import './App.css';
import React from 'react'
import {NavLink, Route, Switch} from "react-router-dom";
import AuthPage from "./components/authPage/AuthPage";
import InfoPage from "./components/infoPage/InfoPage";
import AdminPage from "./components/adminPage/AdminPage";
import {connect} from "react-redux";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import FilmsPage from "./components/FilmsPage/FilmsPage";
import InfoFilm from "./components/InfoFilm/InfoFilm";

const App = ({isAdmin, isAuth}) => {
    return (
        <div className="App">

            <MenuAppBar/>
            {/*// {*/}
            {/*//     isAuth &&*/}
            {/*//     <div className="navMenu">*/}
            {/*//         <div>*/}
            {/*//             <NavLink to={'/'}>Auth </NavLink>*/}
            {/*//         </div>*/}
            {/*//         <div>*/}
            {/*//             <NavLink to={'/info-page'}>Info page</NavLink>*/}
            {/*//         </div>*/}
            {/*//         <div>*/}
            {/*//             {isAdmin && <NavLink to={'/admin-page'}>Admin page</NavLink>}*/}
            {/*//         </div>*/}
            {/*//     </div>*/}
            {/*// }*/}
            <Switch>
                <Route exact path={'/info-page'} component={InfoPage}/>
                <Route exact path={'/admin-page'} component={AdminPage}/>
                <Route exact path={'/films-page'} component={FilmsPage}/>
                <Route exact path={'/about-film/:filmId'} component={InfoFilm} />
                <Route component={AuthPage}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAdmin: state.auth.isAdmin,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(App);
