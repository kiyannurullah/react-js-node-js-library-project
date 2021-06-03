import {ADD_BOOK, GET_BOOKS, LOGIN_URL, UPDATE_BOOK} from "../../constants/api.constants";
import axios from 'axios';
import {getUserToken} from "../../utils";

export function getBooks() {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'Authorization' : 'Bearer '.concat(getUserToken())},
    };

    return dispatch => {
        dispatch({
            type: 'GET_BOOKS',
            payload: axios.get(GET_BOOKS, { headers: requestOptions.headers })
                .then(response => response.data.response)
        })
    }
}

export const AddBook = (params) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'Authorization' : 'Bearer '.concat(getUserToken())},
        body:{
            title: params.title,
            description: params.description,
            author: params.author
        }
    };

    return dispatch => {
        dispatch({
            type: 'ADD_BOOK',
            payload: axios.post(ADD_BOOK, requestOptions.body, {headers: requestOptions.headers})
                .then(response => response.data)
        })
    }

};

export const UpdateBook = (params) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'Authorization' : 'Bearer '.concat(getUserToken())},
        body:{
            title: params.title,
            description: params.description,
            author: params.author
        }
    };

    return dispatch => {
        dispatch({
            type: 'UPDATE_BOOK',
            payload: axios.patch(UPDATE_BOOK + params.id, requestOptions.body, {headers: requestOptions.headers})
                .then(response => response.data)
        })
    }

};
