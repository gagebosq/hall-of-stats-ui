import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getTeams = async () => {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
};

export const getTeamByName = async (name: string) => {
    const response = await axios.get(`${API_URL}/teams/${name}`);
    return response.data;
};
