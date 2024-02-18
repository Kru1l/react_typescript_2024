import {FC} from "react";

import {ICar} from "../../../interfaces/carInterface";
import styles from './Car.module.css';
import {ISetState} from "../../../types/setStateType";
import {carService} from "../../../services/carService";

interface IProps {
    car: ICar,
    setCarForUpdate: ISetState<ICar>,
    setTrigger: ISetState<boolean>
}

const Car: FC<IProps> = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const handleDelete = async () => {
      await carService.deleteById(id);
      setTrigger(prev => !prev)
    };

    return (
        <div className={styles.car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button className={styles.btn} onClick={() => setCarForUpdate(car)}>Update</button>
            <button className={styles.btn} onClick={() => handleDelete()}>Delete</button>
        </div>
    );
};

export default Car;