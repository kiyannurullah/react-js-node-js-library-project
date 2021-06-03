import { GET_BOOKS } from "../../constants/api.constants";
import axios from 'axios';
import {getUserToken} from "../../utils";

export function getBooks(param) {

    const auth = 'Bearer '.concat(getUserToken())
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
