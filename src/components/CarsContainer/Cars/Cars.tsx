import {useEffect} from "react";

import {Car} from "../Car/Car";
import styles from './Cars.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {carActions} from "../../../store/slices";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
        // apiService.get(urls.cars.byId(3526)).then(({data}) => console.log(data))
        //     .catch((e: AxiosError) => console.error(e.response.data));
    }, [trigger, dispatch]);

    return (
        <div className={styles.Cars}>
            {cars && cars.map(car =>
                <Car
                    key={car.id}
                    car={car}
                />
            )}
        </div>
    );
};

export {Cars};