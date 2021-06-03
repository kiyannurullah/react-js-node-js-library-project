import React from 'react';
import {Route, Switch} from "react-router-dom";
import {BOOK_LIST} from "../../constants/appUrls.constants";

import BookList from "../../components/Dashboard/BookList";
import Error from "../../components/Error/Error";


const PrivateUrls = () => {

    return (
        <Switch>
            <Route exact path={BOOK_LIST} component={ BookList } />
            <Route component={ Error }/>
        </Switch>
    );
};
export default PrivateUrls;
