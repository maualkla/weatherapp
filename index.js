// tutorial reference: https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d
// Made by Mauricio EAL
// August 14th, 2019
// Make the request to weather 
const request = require('request');
let     url = `http://api.openweathermap.org/data/2.5/forecast`,
        id = '524901',
        appId = 'aa00dbd5e679b8ea3549cc02e3e1068f'
        testUrl = 'fake.fake';
url = `${url}?id=${id}&APPID=${appId}`;
console.log(url);

request(testUrl, (err, response, body) => {
    if (err)
    {
        console.log(`Error ${err}`);
    }
    else
    {
        console.log(`Body: ${body}`);
    }
});