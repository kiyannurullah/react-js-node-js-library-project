import {xchangeConstants} from "../../constants/library.constans";

const initialState = {
    fetching : false,
    fetchingList : false,
    status : false,
    xchange : [],
    xchangeList : [],
    xchangeCurrency : [],
    error : '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case xchangeConstants.XCHANGE_PENDING:
            return {
                ...state,
                fetching: true,
                status: false,
            };
        case xchangeConstants.XCHANGE_FULFILLED:
            return {
                ...state,
                fetching: false,
                status: true,
                xchange: action.payload,
            };
        case xchangeConstants.XCHANGE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        case xchangeConstants.XCHANGE_LIST_PENDING:
            return {
                ...state,
                fetchingList: true,
            };
        case xchangeConstants.XCHANGE_LIST_FULFILLED:
            return {
                ...state,
                fetchingList: false,
                xchangeList: action.payload,
            };
        case xchangeConstants.XCHANGE_LIST_REJECTED:
            return {
                ...state,
                fetchingList: false,
                error: action.payload,
            };
        case xchangeConstants.XCHANGE_CURRENCY_PENDING:
            return {
                ...state,
            };
        case xchangeConstants.XCHANGE_CURRENCY_FULFILLED:
            return {
                ...state,
                xchangeCurrency: action.payload,
            };
        case xchangeConstants.XCHANGE_CURRENCY_REJECTED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state
    }
}
