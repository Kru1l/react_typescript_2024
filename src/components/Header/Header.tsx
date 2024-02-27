import {NavLink} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.Header}>
            <div className={styles.linksBlock}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </div>
    );
};

export {Header};