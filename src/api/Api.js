import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const beritaEndpoint = (type) => `${baseUrl}${type}`; // Endpoint dinamis berdasarkan type

const getBerita = (type) => {
    return axios.get(beritaEndpoint(type));
};

export default {
    getBerita
};
