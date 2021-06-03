import {getBooksConstants} from "../../constants/library.constans";

const initialState = {
    fetching : false,
    book_list : [],
    error : '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case getBooksConstants.GET_BOOKS_PENDING:
            return {
                ...state,
                fetching: true,
                error: {}
            };
        case getBooksConstants.GET_BOOKS_FULFILLED:
            return {
                ...state,
                fetching: false,
                book_list: action.payload
            };
        case getBooksConstants.GET_BOOKS_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        default:
            return state
    }
}
