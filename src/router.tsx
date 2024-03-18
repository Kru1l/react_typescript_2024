import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AuthPage, CarsPage, LoginPage, PrivatePage, RegisterPage} from "./pages";
import {AuthRequired} from "./hoc";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                path: 'register', element: <RegisterPage/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                element: <AuthRequired><AuthPage/></AuthRequired>, children: [
                    {
                        path: 'cars', element: <CarsPage/>
                    },
                    {
                        path: 'private', element: <PrivatePage/>
                    }
                ]
            },
        ]
    }
]);

export {router};