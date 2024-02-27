import {useEffect, useState} from "react";

import styles from './Users.module.css';
import {IUser} from "../../../interfaces";
import {userService} from "../../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
            .catch((e) => console.error(e));
    }, []);

    return (
        <div className={styles.Users}>
            {users.map(user => <User
                key={user.id}
                user={user}
            />)}
        </div>
    );
};

export {Users};