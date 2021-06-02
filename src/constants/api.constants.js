export const BASE_API = (process.env.NODE_ENV === 'production')
    ? 'https://api.extranetwork.com/app/v1'
    : 'http://localhost:3000';


/*User*/
export const LOGIN_URL = BASE_API+"/login";
export const LOGOUT_URL = BASE_API+"/logout";
export const REGISTER = BASE_API+"/register";
