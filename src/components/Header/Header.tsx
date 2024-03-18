import {useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import styles from './Header.module.css';
import {authService} from "../../services";
import {authActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const access = authService.getAccessToken();

    useEffect(() => {
        if (access && !currentUser) {
            dispatch(authActions.me());
        }
    }, [access, currentUser, dispatch]);

    const logOut = (): void => {
        authService.deleteTokens();
        dispatch(authActions.setCurrentUser(null));
        navigate('/login');
    };


    return (
        <div className={styles.Header}>
            {currentUser
                ?
                <div className={styles.user}>
                    <div>{currentUser.username}</div>
                    <div id={styles.logOut}
                         onClick={logOut}
                    >Log Out
                    </div>
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