import axios from "axios";
import appSettings from "./appSettings.json";

const api = axios.create({
    baseURL: appSettings.backendBaseUrl
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api