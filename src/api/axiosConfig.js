import axios from 'axios';

export default axios.create({
    baseURL:'http://18.117.103.19:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
