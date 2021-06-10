import {
    getBooksConstants,
    addBookConstants,
    updateBookConstants
} from "../../constants/library.constans";

const initialState = {
    fetching : true,
    book_list : [],
    error : {},

    add_book : [],
    error_add_book : '',

    update_book : [],
    error_update_book : {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        //GET BOOKS REDUCE
        case getBooksConstants.GET_BOOKS_PENDING:
            return {
                ...state,
                fetching: true,
                error: {},
                error_add_book: {},
                error_update_book: {},
                add_book: [],
                update_book: []
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

            //ADD BOOK REDUCE

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

            //UPDATE BOOK REDUCE

        case updateBookConstants.UPDATE_BOOK_PENDING:
            return {
                ...state,
                error_add_book: {}
            };
        case updateBookConstants.UPDATE_BOOK_FULFILLED:
            return {
                ...state,
                update_book: action.payload,
                error_update_book: {}
            };
        case updateBookConstants.UPDATE_BOOK_REJECTED:
            return {
                ...state,
                error_update_book: action.payload
            };
        default:
            return state
    }
}
