import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './UserDetails.module.css';
import {IUser} from "../../../interfaces";
import {userService} from "../../../services";
import {useAppLocation} from "../../../hooks";

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState<IUser>(null);
    const {state} = useAppLocation<{ user: IUser }>();
    const {id} = useParams();

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user);
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
                .catch((e) => console.error(e));
        }
    }, [id, state]);

    return (
        <div className={styles.Details}>
            {userDetails &&
                <>
                    <p>ID: {userDetails.id}</p>
                    <p>Name: {userDetails.name}</p>
                    <p>Username: {userDetails.username}</p>
                    <p>Email: {userDetails.email}</p>
                </>
            }
        </div>
    );
};

export {UserDetails};