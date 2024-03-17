import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import styles from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../store/slices";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const access = authService.getAccessToken();

    useEffect(() => {
        if (access && !currentUser) {
            dispatch(authActions.me());
        }
    }, []);

    return (
        <div className={styles.Header}>
            {currentUser
                ?
                <div className={styles.user}>
                    <p>{currentUser.username}</p>
                </div>
                :
                <>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Register</NavLink>
                </>
            }
        </div>
    );
};

export {Header};