import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayout = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};