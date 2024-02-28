import {FC} from 'react';
import {useAppContext} from "../hooks/useAppContext";

interface IProps {

}

const PostsPage: FC<IProps> = () => {
    const {user, setUser} = useAppContext();

    return (
        <div>
            PostsPage
        </div>
    );
};

export {PostsPage};