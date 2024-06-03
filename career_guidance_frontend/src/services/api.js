import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            try {
                const { data } = await axios.post(
                    `${API_BASE_URL}auth/jwt/refresh/`,
                    { refresh: refreshToken }
                );
                localStorage.setItem("accessToken", data.access);
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${data.access}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token failed", refreshError);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;

export { API_BASE_URL };
