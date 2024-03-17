import {FC} from 'react';

import styles from './Car.module.css';
import {ICar} from "../../../interfaces";
import {carActions} from "../../../store";
import {useAppDispatch} from "../../../hooks";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useAppDispatch();

    return (
        <div className={styles.Car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>

            <button className={styles.btn} onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button className={styles.btn} onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {Car};