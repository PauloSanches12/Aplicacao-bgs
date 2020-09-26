import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-dev-superior.herokuapp.com'
});

export default api;