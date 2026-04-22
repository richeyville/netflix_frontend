import axios from 'axios';

export default axios.create({
    baseURL:'http://3.139.87.109:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
