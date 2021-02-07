import axios from 'axios';

const API_PATH = '/api/v1';

const codenames = axios.create({
    baseURL: `http://localhost:8000${API_PATH}`
});

export default codenames;