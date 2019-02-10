import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://redesocial-agnl.mybluemix.net/',
});

export default api;