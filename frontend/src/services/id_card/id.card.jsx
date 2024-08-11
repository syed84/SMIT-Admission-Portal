import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const generateIdCard = async (idCardData) => {
    return await axios.post(`${API_URL}/pdf/generate-id`, idCardData, { responseType: 'blob' });
};
