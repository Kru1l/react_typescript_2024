import {configureStore} from "@reduxjs/toolkit";

import {authReducer, loadingReducer} from "./slices";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        auth: authReducer
    }
});

export {store};