import React, {Component} from "react"
import {Route,Switch} from "react-router-dom"
import {compose} from "redux";
import {
        APP
} from "../../constants/appUrls.constants"

import Error from "../../components/Error/Error";

class PrivateUrls extends Component {

    render() {
        return(
            <Switch>
                <Route exact path={APP} component={ Error } />
                <Route component={ Error }/>
            </Switch>

        )
    }
}

export default PrivateUrls;
