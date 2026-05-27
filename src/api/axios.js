import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3000/api/v1'
    baseURL: 'https://backend-academy.vercel.app/api/v1'
})
export default api;