import {apiService} from "./apiService";
import {urls} from "../constans";
import {ICar, IPagination} from "../interfaces";
import {IRes} from "../types";

const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars.base),
    create: (car: ICar): IRes<void> => apiService.post(urls.cars.base, car),
    updateById: (id: number, car: ICar): IRes<void> => apiService.put(urls.cars.byId(id), car),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id))
};

export {carService};