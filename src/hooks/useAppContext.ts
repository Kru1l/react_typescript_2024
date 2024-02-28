import {useContext} from "react";

import {BaseContext, MainContext} from "../hoc/ContextProvider";

export const useAppContext = () => useContext(BaseContext);
export const useMainContext = () => useContext(MainContext);