// tutorial reference: https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d
// Made by Mauricio EAL
// August 14th, 2019
// Make the request to weather 
const request = require('request');
let url = `http://api.openweathermap.org/data/2.5/forecast`;

request(url, (err, response, body) => {
    if (err)
    {
        console.log(`Error ${error}`);
    }
    else
    {
        console.log(`Body: ${body}`);
    }
});