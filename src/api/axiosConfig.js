import axios from 'axios';

export default axios.create({
    baseURL:'http://a5a71ad7ba0ee499295a88aa2e16f50d-1754491642.us-east-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
