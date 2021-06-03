export const BASE_API = (process.env.NODE_ENV === 'production')
    ? 'https://api.extranetwork.com/app/v1'
    : 'http://localhost:3000';


/*User*/
export const LOGIN_URL = BASE_API+"/login";
export const REGISTER = BASE_API+"/register";

export const GET_BOOKS = BASE_API+"/get-books";
export const CREATE_BOOK = BASE_API+"/create-new-book";
export const UPDATE_BOOK = BASE_API+"/update-book:id";
export const DELETE_BOOK = BASE_API+"/delete-book:id";
export const SEARCH_BOOK = BASE_API+"/search:id";

