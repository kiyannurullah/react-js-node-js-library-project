import { userConstants } from "../../constants/user.constants";

const initialState = {
    fetching :false,
    userLoginData: [],
    userLogoutStatus:null,
    error:{},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_PENDING:
            return {
                ...state,
                fetching : false,
                error : {},
            };
        case userConstants.LOGIN_FULFILLED:
            return {
                ...state,
                fetching : false,
                userLoginData: action.payload,
            };
        case userConstants.LOGIN_REJECTED:
            return {
                ...state,
                fetching : false,
                error: action.payload
            };
        //LOGOUT
        case userConstants.LOGOUT_PENDING:
            return {
                ...state,
                fetching : false,
                error : {},
            };
        case userConstants.LOGOUT_FULFILLED:
            return {
                ...state,
                fetching : false,
                userLogoutStatus: action.payload?.status,
            };
        case userConstants.LOGOUT_REJECTED:
            return {
                ...state,
                fetching : false,
                error: action.payload
            };
        case "USER_CLEAR_STATE" :
            return {
                ...initialState
            }
        case "CLEAR_STATE" :
            return {
                ...initialState
            }
        default:
            return state
    }
}
