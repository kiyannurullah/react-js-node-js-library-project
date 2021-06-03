import {getBooksConstants, addBookConstants} from "../../constants/library.constans";

const initialState = {
    fetching : false,
    book_list : [],
    error : '',

    add_book : [],
    error_add_book : '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case getBooksConstants.GET_BOOKS_PENDING:
            return {
                ...state,
                fetching: true,
                error: {},
                error_add_book: {},
                add_book: []
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

        case addBookConstants.ADD_BOOK_PENDING:
            return {
                ...state,
                error_add_book: {}
            };
        case addBookConstants.ADD_BOOK_FULFILLED:
            return {
                ...state,
                add_book: action.payload
            };
        case addBookConstants.ADD_BOOK_REJECTED:
            return {
                ...state,
                error_add_book: action.payload
            };
        default:
            return state
    }
}
