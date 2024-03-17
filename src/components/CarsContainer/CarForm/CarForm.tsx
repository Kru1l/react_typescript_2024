import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from './CarForm.module.css';
import {ICar} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {carActions} from "../../../store/slices";

const CarForm = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid},
        setValue,
        reset
    } = useForm<ICar>({mode: "onBlur"});

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
    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}));
        reset();
    };

    return (
        <form className={styles.CarForm} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'Brand'} {...register('brand', {required: true})}/>
            <input type="text" placeholder={'Price'} {...register('price', {required: true})}/>
            <input type="text" placeholder={'Year'} {...register('year', {required: true})}/>

            <button disabled={!isValid} className={styles.submit}>
                {carForUpdate ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export {CarForm};