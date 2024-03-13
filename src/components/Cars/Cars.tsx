import {useEffect} from "react";

import styles from './Cars.module.css';
import {Car} from "../Car/Car";
import {carActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [trigger, dispatch]);

    return (
        <div className={styles.Cars}>
            {cars.map(car =>
                <Car
                    key={car.id}
                    car={car}
                />
            )}
        </div>
    );
};

export {Cars};