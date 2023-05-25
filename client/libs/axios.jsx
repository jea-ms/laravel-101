import axios from 'axios';

const API_URL = process.env.API_URL

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
});

export const axiosAuth =  axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
});