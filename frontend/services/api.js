import axios from 'axios';

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',

    headers: {
        'Content-type': 'application/json'
    },
    // pour envoyer le cookie avec la requete
    withCredentials: true,
});