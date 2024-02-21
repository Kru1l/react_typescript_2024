import {useEffect, useState} from "react";

import CarForm from "./CarForm";
import Cars from "./Cars";
import {carService} from "../../services";
import {ICar} from "../../interfaces";


const CarContainer = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    // const changeTrigger = () => {
    //   setTrigger(prev => !prev);
    // };

    return (
        <div>
            <CarForm setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export default CarContainer;