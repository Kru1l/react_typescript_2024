import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {ICar, IPagination} from "../../interfaces";
import {carService} from "../../services";
import {IRes} from "../../types";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data);
        }
    }
);

const create = createAsyncThunk<IRes<void>, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data);
        }
    }
);

const updateById = createAsyncThunk<IRes<void>, { id: number, car: ICar }>(
    'carsSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data);
        }
    }
);

const deleteById = createAsyncThunk<IRes<void>, { id: number }>(
    'carsSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data);
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items;
            })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(create, updateById, deleteById), state => {
                state.trigger = !state.trigger;
            })
});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
};

export {
    carReducer,
    carActions
};