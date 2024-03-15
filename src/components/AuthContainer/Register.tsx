import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from './Auth.module.css';
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../store/slices";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid}
    } = useForm<IAuth>({mode: "onBlur"});

    const {registerError} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const reg: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user}));

        if (requestStatus === 'fulfilled') {
            navigate('/cars');
        }
    };

    return (
        <div className={styles.Register}>
            <form className={styles.authForm} onSubmit={handleSubmit(reg)}>
                <h1>Registration</h1>
                {registerError && <span>{registerError}</span>}
                <input type="text" placeholder={'Username'} {...register('username', {required: true})}/>
                <input type="text" placeholder={'Password'} {...register('password', {required: true})}/>

                <button id={styles.btnReg} disabled={!isValid}>Register</button>
            </form>
        </div>
    );
};

export {Register};