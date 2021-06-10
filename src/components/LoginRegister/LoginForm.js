import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isDefined, userLogin} from "../../utils";
import {login, userClearState} from "../../redux/actions/userActions";
import {history} from "../../utils/history";
import {BOOK_LIST} from "../../constants/appUrls.constants";
import {Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        height: "100vh"
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: "#ffffff",
        backgroundColor:"#003c5f",
        '&:hover': {
            backgroundColor: "#053f61",
        },
    },
}))(Button);

const LoginForm = () => {
    const classes = useStyles();
    const userReducer = useSelector(props => props.userReducer)
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(login(formData.email, formData.password))
    };

    useEffect( () => {

        if(userReducer && !userReducer.fetching && Object.keys(userReducer.error).length>0){
            const newState = isDefined(userReducer.error.response) && userReducer.error.response.data.message;
            setErrorMessage(newState);
        }

        if(userReducer && !userReducer.fetching && Object.keys(userReducer.userLoginData).length>0){

            const token = userReducer.userLoginData.token;

            userLogin(token);
            dispatch( userClearState() )
            history.push(BOOK_LIST);
        }

    },[userReducer])


    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid container item
                      xs={12} lg={6}
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    <ValidatorForm onSubmit={onSubmit} style={{width: "50%", margin: "auto"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" gutterBottom style={{textAlign: 'center'}}>
                                    Welcome To Online Library
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    label="E-Mail"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    validators={['required', 'isEmail']}
                                    errorMessages={['E-Mail is required', 'email is not valid']}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    validators={['required']}
                                    errorMessages={['Password is required']}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="p" gutterBottom style={{textAlign: 'center', color:"#e40b0b"}}>
                                    {errorMessage}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                >
                                    Login
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </Grid>
                <Grid item lg={6} style={{backgroundImage: 'url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/illustrations/login-visual-4.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right bottom',
                    backgroundColor: '#003c5f',
                    width: "50%"}}>
                </Grid>
            </Grid>
        </div>
    );
};
export default LoginForm;
