import {apiService} from "./apiService";

const authService = {
    async login() {
        const {data} = await apiService.post<{ access: string }>('/auth/login');
        this.setToken(data.access);
    },
    setToken(token: string): void {
        localStorage.setItem('token', token);
    },
    getToken(): string {
        return localStorage.getItem('token');
    }
}

export {authService};