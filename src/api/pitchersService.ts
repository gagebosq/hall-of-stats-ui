import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getPitchers = async () => {
    const response = await axios.get(`${API_URL}/pitchers`);
    return response.data;
};

export const getPitcherByName = async (name: string) => {
    const response = await axios.get(`${API_URL}/pitchers/${name}`);
    return response.data;
};
