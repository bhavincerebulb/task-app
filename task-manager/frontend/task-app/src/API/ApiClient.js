import axios from "axios";

const apiUrl  = "http://localhost:8000"
 // Backend  server URL

const instance = axios.create({
    baseURL: apiUrl
})

instance.interceptors.request.use(async function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default instance;