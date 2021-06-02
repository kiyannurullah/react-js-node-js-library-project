import React ,{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";

import {clearStateUserRegister, userRegister} from "../../redux/actions/userRegisterAction";


const RegisterForm = () => {


    const { register, handleSubmit,  errors , getValues} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        })
    const [openModal,setOpenModal ] = useState(false);
    const [openConditionsModal, setOpenConditionsModal ] = useState(false);
    const [checked, setChecked] = React.useState(false);

    const dispatch = useDispatch();


    const onSubmit = () => {
       setOpenModal(true);
    }

    const showConditions = () => {
        setOpenConditionsModal(true);
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const registerUser = () => {
        //TODO : Bu kısmın kaldırılıp test edilmesi gerekiyor.Modalların tekrar açılmaması için
        setOpenModal(false)
        dispatch(userRegister(formValue))
    }

    useEffect(() => {
        return () => {
            dispatch(clearStateUserRegister())
        }
    }, [openModal]);

    const formValue = getValues();

    return (
        <>asd
        </>
    )


}


export default RegisterForm
