import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoute } from "./routes";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store/store";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Signika Negative', "sans-serif",
        ].join(','),
        fontWeight: [
            600
        ].join(','),
    },});

const render = Component => ReactDOM.render(
    <ThemeProvider theme={theme}>

    <Provider store={store}>
        <Component/>
    </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

render(AppRoute);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
