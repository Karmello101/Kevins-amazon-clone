import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/payments/create?total=29900'
});

export default instance;