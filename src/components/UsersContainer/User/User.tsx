import {FC} from 'react';

import styles from './User.module.css';
import {IUser} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={styles.User}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <button className={styles.btn} onClick={() => navigate(`${id}`, {state: {user}})}>Show Details</button>
        </div>
    );
};

export {User};