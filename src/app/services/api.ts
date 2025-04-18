"use client"
import axios from "axios";
import { LoginSchema, RegisterSchema } from "../(auth)/utils/auth-schema";
import { getToken, removeToken } from "../(auth)/utils/authLocalStorage";
import { config } from "process";

const apiInstance = axios.create({baseURL: "https://assign-api.piton.com.tr/api/rest"});
apiInstance.interceptors.request.use(
    (config) => {
        if (!config.url?.includes('/login') && !config.url?.includes('/register')) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    }
);

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            removeToken()
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export const apiLogin = (data: LoginSchema) => apiInstance.post("/login", data);
export const apiRegister = (data: RegisterSchema) => apiInstance.post("/register", data);
export const fetcher = (url: string) => apiInstance.get(url).then((res) => res.data);