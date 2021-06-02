import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {userLogin} from "../../utils";
import {history} from "../../utils/history";
import {CONTENT} from "../../constants/appUrls.constants";

import { login,userClearState } from "../../redux/actions/userActions";


const LoginForm = () => {

    const userReducer = useSelector(props => props.userReducer)
    const [errorMessage, setErrorMessage] = React.useState(null);
    const { register, handleSubmit,  errors  } = useForm({
        mode: "onBlur",
        reValidateMode: 'onBlur',
    });
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(login(data.email, data.password, data.remember_me))
    };

    useEffect( () => {


        if(userReducer && !userReducer.fetching && !userReducer.fetching && Object.keys(userReducer.error).length>0){
            const newState = userReducer.error.response.data.message;
            setErrorMessage(newState);
        }

        if(userReducer && !userReducer.fetching && Object.keys(userReducer.userLoginData).length>0){

            const token = userReducer.userLoginData.token;

            userLogin(token);
            dispatch( userClearState() )
            history.push(CONTENT);
        }

    },[userReducer])

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  style={{textAlign: 'center'}} className="register-form" autoComplete="off" >
                <input name="email" type="email" id="email" autoComplete="off" {...register("email", { required: true })} />
                <input name="password" type="password" id="password" autoComplete="off" {...register("password", { required: true })} />

                <p className="error-login">{errorMessage}</p>
                <button
                    className="login-button"
                    type="submit"
                    color="primary"
                    style={{textTransform: 'none' }}
                >login</button>

            </form>

        </div>
    )
}

export default LoginForm;
