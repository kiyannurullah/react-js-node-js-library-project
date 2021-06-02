import {Redirect, Route} from "react-router-dom";
import React from "react";

export const PublicRoute = ({ component: Component,restricted, ...rest }) => (
    <Route {...rest} render={props => (
          restricted
            ?  <Redirect to="/" />
            :  <Component {...props} />
    )} />
);
