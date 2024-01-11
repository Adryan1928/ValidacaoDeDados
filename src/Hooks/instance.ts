import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://10.0.0.111:5000'
})