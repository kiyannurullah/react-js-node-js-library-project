import {ADD_BOOK, GET_BOOKS, LOGIN_URL} from "../../constants/api.constants";
import axios from 'axios';
import {getUserToken} from "../../utils";
const auth = 'Bearer '.concat(getUserToken());

export function getBooks() {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json',  'Authorization' : auth},
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
        headers: { 'Content-Type': 'application/json',  'Authorization' : auth},
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
