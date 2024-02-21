import {FC} from "react";

import Car from "./Car/Car";
import {ICar} from "../../interfaces";
import {ISetState} from "../../types";



interface IProps {
    cars: ICar[],
    setCarForUpdate: ISetState<ICar>,
    setTrigger: ISetState<boolean>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate, setTrigger}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export default Cars;