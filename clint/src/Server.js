import axios from 'axios';

const API_URI = 'http://localhost:2000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/uplode`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}