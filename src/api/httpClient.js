import axios from 'axios';

const baseURL = process.env.REACT_APP_USER_ENDPOINT || "https://jsonplaceholder.typicode.com"; 

const httpClient = axios.create({
    baseURL,
    timeout: 480000,
    withCredentials: true  // Enable cookie
})

export default httpClient