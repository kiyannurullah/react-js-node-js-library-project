import {combineReducers}            from "redux"
import userReducer                  from "./userReducer"


const appReducer = combineReducers({
    userReducer,
});


//const rootReducers = combineReducers();
const rootReducers = ( props, action) => {
    if (action.type === 'CLEAR_STATE') {
        props = '';
    }

    return appReducer(props, action);
};

export default rootReducers;
