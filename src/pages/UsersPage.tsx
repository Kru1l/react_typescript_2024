import {FC, useEffect} from 'react';
import {useAppContext, useMainContext} from "../hooks/useAppContext";

interface IProps {

}

const UsersPage: FC<IProps> = () => {
    const {user, setUser} = useAppContext();
    const {name} = useMainContext();

    useEffect(() => {
        setUser({id: 5, name: 'Non', status: false})
    }, []);

    return (
        <div>
            UsersPage
        </div>
    );
};

export {UsersPage};