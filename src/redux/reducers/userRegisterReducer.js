import { userConstants } from "../../constants/user.constants";

const initialState = {
    fetching :false,
    registerData: [],
    error    :{},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.REGISTER_PENDING:
            return {
                fetching :false,
                registerData: [],
                error    :{},
            };
        case userConstants.REGISTER_FULFILLED:
            return {
                ...state,
                fetching : false,
                registerData: action.payload,
            };
        case userConstants.REGISTER_REJECTED:
            return {
                ...state,
                fetching : false,
                error: action.payload
            };
        case "CLEAR_STATE" :
            return {
                ...initialState
            }
        default:
            return state
    }
}
