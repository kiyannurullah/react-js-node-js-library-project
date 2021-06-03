import React, {Component} from "react"
import {Route,Switch} from "react-router-dom"
import {compose} from "redux";
import {
        APP, BOOK_LIST
} from "../../constants/appUrls.constants"

import BookList from "../../components/Dashboard/BookList/index.";
import Error from "../../components/Error/Error";

class PrivateUrls extends Component {

    render() {
        return(
            <Switch>
                <Route exact path={BOOK_LIST} component={ BookList } />
                <Route component={ Error }/>
            </Switch>

        )
    }
}

export default PrivateUrls;
