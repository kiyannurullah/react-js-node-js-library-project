import axios from "axios";
import {LOGIN_URL, LOGOUT_URL} from "../../constants/api.constants"
import {getAppLang, getUserToken} from "../../utils";

export const login = (username, password, remember_me, onesignal_key) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'language' : getAppLang()},
        body:{
            email: username,
            password: password
        }
    };

    return dispatch => {
        dispatch({
            type: 'LOGIN',
            payload: axios.post(LOGIN_URL, requestOptions.body, {headers: requestOptions.headers})
                .then(response => response.data.data)
        })
    }

};

export const logout = () => {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'authToken': getUserToken(), 'language' : getAppLang()},
    };

    return dispatch => {
        dispatch({
            type: 'LOGOUT',
            payload: axios.post(LOGOUT_URL,{}, {headers: requestOptions.headers})
                .then(response => response.data)
        })
    }
};

export const clearState =  () => {
    return { type:'CLEAR_STATE' }
}

export const userClearState = () => {
    return { type:'USER_CLEAR_STATE' }
}
