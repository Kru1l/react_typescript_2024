import {NavLink} from "react-router-dom";

import styles from './Header.module.css';
import {useAppSelector} from "../../hooks";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);

    return (
        <div className={styles.Header}>
            {currentUser
                ?
                <NavLink to={'#'}>{currentUser.username}</NavLink>
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