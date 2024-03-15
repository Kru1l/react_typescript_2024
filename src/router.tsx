import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                path: 'register', element: <RegisterPage/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                path: 'cars', element: <CarsPage/>
            }
        ]
    }
]);

export {router};