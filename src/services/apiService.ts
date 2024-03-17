import axios, {AxiosError} from "axios";

import {authService} from "./authService";
import {baseURL, urls} from "../constans";
import {router} from "../router";

const apiService = axios.create({baseURL});

type IWaitCb = () => void;

const waitList: IWaitCb[] = [];

let isRefreshing: boolean = false;

apiService.interceptors.request.use(req => {
    const access = authService.getAccessToken();

    req.headers.Authorization = `Bearer ${access}`;
    return req
});

apiService.interceptors.response.use(
    res => res,
    async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    await authService.refresh();
                    runAfterRefresh();
                    isRefreshing = false;
                    return apiService(originalRequest);
                } catch {
                    authService.deleteTokens();
                    isRefreshing = false;
                    await router.navigate('/login?SessionExpired=true');
                    return Promise.reject(error);
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error);
            }

            return new Promise(resolve => {
                subscribeToWaitList(() => {
                    resolve(apiService(originalRequest));
                });
            });
        }
        return Promise.reject(error);
    }
);

const subscribeToWaitList = (cb: IWaitCb): void => {
    waitList.push(cb);
};

const runAfterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb();
    }
};

export {apiService};