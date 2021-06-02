import axios          from 'axios';
import { REGISTER } from "../../constants/api.constants";


export function userRegister(params) {

    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            params: {
                "name" : params.name,
                "surname" : params.surname,
                "email" : params.email,
                "property_name": params.property_name,
            }
        }
    };

    return dispatch => {
        dispatch({
            type: 'REGISTER',
            payload: axios.post(REGISTER, requestOptions.body, {headers: requestOptions.headers})
                .then(response => response.data.data)
        })
    }
}

export function clearStateUserRegister() {
    return  dispatch => {
             dispatch({
            type: 'CLEAR_STATE'
        })
    }
}
