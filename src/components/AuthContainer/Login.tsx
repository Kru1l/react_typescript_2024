import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from './Auth.module.css';
import {IAuth} from "../../interfaces";
import {authActions} from "../../store";
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid}
    } = useForm<IAuth>({mode: "onBlur"});

    const {loginError} = useAppSelector(state => state.auth);
    const {state} = useAppLocation<{ pathname: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));

        if (requestStatus === 'fulfilled') {
            navigate(state?.pathname || '/cars');
        }
    };

    return (
        <div className={styles.Login}>
            <form className={styles.authForm} onSubmit={handleSubmit(login)}>
                <h1>Login</h1>
                {loginError && <span>{loginError}</span>}
                <input type="text" placeholder={'Username'} {...register('username', {required: true})}/>
                <input type="text" placeholder={'Password'} {...register('password', {required: true})}/>

                <button disabled={!isValid} id={styles.btnLog}>Log In</button>
            </form>
        </div>
    );
};

export {Login};