import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { HOMEPAGE } from '../constants/appUrls.constants';
import {isLogged} from "../utils/index"

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLogged()
            ? <Component {...props} />
            : <Redirect to={HOMEPAGE} />
    )} />
);
