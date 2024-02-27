import {Users} from "../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};