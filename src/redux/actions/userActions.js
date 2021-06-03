import axios from "axios";
import {LOGIN_URL} from "../../constants/api.constants"

export const login = (username, password) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json'},
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

export const userClearState = () => {
    return { type:'USER_CLEAR_STATE' }
}
