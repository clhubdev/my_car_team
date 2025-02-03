import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3001',
    headers: {
        'Content-type': 'application/json'
    },
    withCredentials: true,
});

export async function makeTest() {
    try {
        const response = await apiClient.get('/test');
        return response.data;    
    } catch (error) {
        console.error(error)
    }
}