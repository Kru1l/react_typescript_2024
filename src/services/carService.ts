import {apiService} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../constans";
import {IRes} from "../types";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {carService};