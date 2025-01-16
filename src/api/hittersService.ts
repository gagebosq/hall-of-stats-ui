import axios from 'axios';

const API_URL = 'http://localhost:8080/api/hitters';

export const fetchAllHitters = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchHitterByName = async (name: string | number | boolean) => {
    const response = await axios.get(`${API_URL}/${encodeURIComponent(name)}`);
    return response.data;
};