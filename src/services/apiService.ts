import axios, {AxiosError} from "axios";

import {authService} from "./authService";
import {baseURL, urls} from "../constans";
import {router} from "../router";

const apiService = axios.create({baseURL});

let isRefreshing = false;

type IWaitList = () => void;

const waitList: IWaitList[] = [];

apiService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }
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
                    isRefreshing = false;
                    runAfterRefresh();
                    return apiService(originalRequest);
                } catch (e) {
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
                subscribeToWaiList(() => {
                    resolve(apiService(originalRequest));
                });
            });

        }
        return Promise.reject(error);
    }
);

const subscribeToWaiList = (cb: IWaitList): void => {
    waitList.push(cb);
};

const runAfterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb();
    }
};

export {apiService};