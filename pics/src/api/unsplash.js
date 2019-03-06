import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bddccd807b45e5da6f20ddc346c493138e47e62d959ac40b3a121462f7a51b7a'

    }
});