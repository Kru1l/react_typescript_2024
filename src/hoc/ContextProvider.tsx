import {createContext, FC, PropsWithChildren, useState} from 'react';

import {IUser} from "../interfaces/userInterface";
import {ISetState} from "../types/setStateType";


const MainContext = createContext<{ name: string }>(null);

const BaseContext = createContext<{ user: IUser, setUser: ISetState<IUser> }>(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [user, setUser] = useState<IUser>(null);

    return (
        <MainContext.Provider value={{name: 'Johnny'}}>
            <BaseContext.Provider value={{user, setUser}}>
                {children}
            </BaseContext.Provider>
        </MainContext.Provider>
    );
};

export {
    ContextProvider,
    MainContext,
    BaseContext
};