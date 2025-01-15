import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getHitters = async () => {
    const response = await axios.get(`${API_URL}/hitters`);
    return response.data;
};

export const getHitterByName = async (name: string) => {
    const response = await axios.get(`${API_URL}/hitters/${name}`);
    return response.data;
};
