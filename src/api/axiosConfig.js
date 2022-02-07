import axios from "axios";
import { getAccessToken } from "../utils/localStorageService";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
axiosConfig.interceptors.request.use(
    function (config) {
        const accessToken = getAccessToken();
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axiosConfig.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default axiosConfig;
