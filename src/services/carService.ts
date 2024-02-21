import {apiService} from "./apiService";
import {IRes} from "../types";
import {ICar} from "../interfaces";
import {urls} from "../constans";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id: number): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {carService};