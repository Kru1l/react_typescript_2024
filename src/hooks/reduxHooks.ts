import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../types";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

// const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
// const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export {
    useAppSelector,
    useAppDispatch
};