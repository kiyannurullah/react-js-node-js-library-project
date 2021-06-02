import { GET_XCHANGE, GET_XCHANGE_LIST, GET_XCHANGE_CURRENCY } from "../../constants/api.constants";
import axios from 'axios';

export function getXchange(param) {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json'},
        body: {
            uid: param,
        }
    };

    return dispatch => {
        dispatch({
            type: 'XCHANGE',
            payload: axios.post(GET_XCHANGE, requestOptions.body,{headers: requestOptions.headers})
                .then(response => response.data)
        })
    }
}

export function getXchangeList (token) {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json'},
        body: {
            token: token,
        }
    };

    return dispatch => {
        dispatch({
            type: 'XCHANGE_LIST',
            payload: axios.post(GET_XCHANGE_LIST, requestOptions.body,{headers: requestOptions.headers})
                .then(response => response.data)
        })
    }
}

export function getXchangeCurrency (token) {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json'},
        body: {
            token: token,
        }
    };

    return dispatch => {
        dispatch({
            type: 'XCHANGE_CURRENCY',
            payload: axios.post(GET_XCHANGE_CURRENCY, requestOptions.body,{headers: requestOptions.headers})
                .then(response => response.data)
        })
    }
}

