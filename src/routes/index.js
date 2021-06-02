import React                        from "react";
import {Route, Router, Switch}      from "react-router-dom"
import {history}                    from "../utils/history";
import {LOGIN, REGISTER}                      from "../constants/appUrls.constants"

import PrivateUrls                  from './WrappedRoutes/PrivateUrls';

import {PublicRoute}                from "./PublicRoute";
import {PrivateRoute}               from "./PrivateRoute";

import LoginForm                    from "../components/LoginRegister/LoginForm";
import RegisterForm                 from "../components/LoginRegister/RegisterForm";

import Error                        from "../components/Error/Error";

export const AppRoute = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute exact path={LOGIN} restricted={false} component={ LoginForm }  />
                <PublicRoute exact path={REGISTER} component={ RegisterForm }  />
                <PrivateRoute exact component={ PrivateUrls } />
                <Route component={ Error }/>
            </Switch>
        </Router>
    );
};

