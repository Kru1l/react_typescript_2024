import {FC} from 'react';

import styles from './Post.module.css';

interface IProps {

}

const Post: FC<IProps> = () => {

    return (
        <div className={styles.Post}>
            Post
        </div>
    );
};

export {Post};