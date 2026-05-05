import axios from 'axios';

export default axios.create({
    baseURL:'http://a29c43550fe56431d93164104c12b037-1002588320.us-east-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
