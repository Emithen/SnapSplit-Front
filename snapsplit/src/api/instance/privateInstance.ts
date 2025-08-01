// 인증이 필요한 API 요청을 위한 axios 인스턴스

import createAxiosInstance from "./base";

const privateInstance = createAxiosInstance();

privateInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default privateInstance;