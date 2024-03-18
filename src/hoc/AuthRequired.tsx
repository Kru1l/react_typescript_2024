import {FC, PropsWithChildren} from 'react';
import {Navigate} from "react-router-dom";

import {authService} from "../services";
import {useAppLocation} from "../hooks";

interface IProps extends PropsWithChildren {

}

const AuthRequired: FC<IProps> = ({children}) => {
    const {pathname} = useAppLocation();

    const access = authService.getAccessToken();

    if (!access) {
        return <Navigate to={'/login'} state={{pathname}}/>
    }

    return (
        <>
            {children}
        </>
    );
};

export {AuthRequired};