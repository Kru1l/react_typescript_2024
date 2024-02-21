import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";

import {carService} from "../../services";
import {ICar} from "../../interfaces";
import {ISetState} from "../../types";



interface IProps {
    // changeTrigger: () => void,
    setTrigger: ISetState<boolean>,
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar
}

const CarForm: FC<IProps> = ({setTrigger, setCarForUpdate, carForUpdate}) => {
    const {register, handleSubmit, setValue, reset} = useForm<ICar>();

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        // changeTrigger();
        setTrigger(prev => !prev);
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);
    
    const update:SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setTrigger(prev => !prev);
        setCarForUpdate(null);
        reset();
    }

    return (
        <div>
            <form name={'form'} onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <label><input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label><input type="text" placeholder={'price'} {...register('price')}/></label>
                <label><input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
};

export default CarForm;