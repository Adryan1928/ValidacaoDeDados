import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.1.102:5000'
})