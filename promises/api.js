const axios = require('axios');

const bored = 'https://www.boredapi.com/api/activity/'
const error = 'https://httpstat.us/404/';


const activity = async (url) => {
    try {
        let response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }

};

activity(bored);

