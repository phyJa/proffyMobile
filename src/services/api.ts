import axios from 'axios';

const api = axios.create({
    // Take the link at the expo window (in the browser): exp://192.168.0.36:19000
    // Replace exp by http
    // Replace 19000 by 3333 (the server port)
    baseURL: 'http://192.168.0.36:3333'
})

export default api;