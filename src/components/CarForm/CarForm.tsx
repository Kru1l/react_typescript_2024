import {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import styles from './CarForm.module.css';
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store";

const CarForm = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid},
        setValue,
        reset
    } = useForm<ICar>();

    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            const {brand, price, year} = carForUpdate;
            setValue('brand', brand);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = (car): void => {
        dispatch(carActions.create({car}));
        reset();
    };

    const update: SubmitHandler<ICar> = (car): void => {
        dispatch(carActions.updateById({id: carForUpdate.id, car}));
        reset();
    };

    return (
        <form className={styles.CarForm} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>

            <button disabled={!isValid} className={styles.submit}>
                {carForUpdate ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export {CarForm};