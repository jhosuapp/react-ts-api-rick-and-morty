import axios from "axios";

const baseAxios = axios.create({
    baseURL: 'http://localhost:5000'
});

export { baseAxios }