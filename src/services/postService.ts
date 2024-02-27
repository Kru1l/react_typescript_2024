import {apiService} from "./apiService";
import {urls} from "../constans";
import {IPost, IUser} from "../interfaces";
import {IRes} from "../types";

const postService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts.base),
    getById: (id: number): IRes<IPost> => apiService.get(urls.posts.byId(id))
};

export {postService};