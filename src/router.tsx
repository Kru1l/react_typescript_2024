import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'/users'}/>
            },
            {
                path: '/users', element: <UsersPage/>
            },
            {
                path: '/posts', element: <PostsPage/>
            }
        ]
    }
]);

export {router};