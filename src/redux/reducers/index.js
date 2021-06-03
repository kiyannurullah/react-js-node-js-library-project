import {combineReducers}            from "redux"
import userReducer                  from "./userReducer"
import libraryReducers              from "./libraryReducers";


const appReducer = combineReducers({
    userReducer,
    libraryReducers
});


//const rootReducers = combineReducers();
const rootReducers = ( props, action) => {
    if (action.type === 'CLEAR_STATE') {
        props = '';
    }

    return appReducer(props, action);
};

export default rootReducers;
