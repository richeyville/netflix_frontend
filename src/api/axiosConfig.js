import axios from 'axios';

export default axios.create({
    baseURL:'http://a3162dce05f934e1da8447a9d4182761-1353929318.us-east-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
