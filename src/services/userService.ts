import {apiService} from "./apiService";
import {urls} from "../constans";
import {IPost, IUser} from "../interfaces";
import {IRes} from "../types";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users.base),
    getById: (id: number): IRes<IUser> => apiService.get(urls.users.byId(id))
};

export {userService};