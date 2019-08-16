// tutorial reference: https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d
// Made by Mauricio EAL
// August 14th, 2019
// Make the request to weather 
const argv = require('yargs').argv;
const request = require('request');

let     url = `http://api.openweathermap.org/data/2.5/forecast`,
        city = argv.c || 'Aguascalientes',
        appId = 'aa00dbd5e679b8ea3549cc02e3e1068f',
        unit = 'imperial',
        testUrl = 'fake.fake',
        message = ``;
url = `${url}?q=${city}&APPID=${appId}&units=${unit}`;
console.log(url);

request(url, (err, response, body) => {
    if (err)
    {
        console.log(`Error ${err}`);
    }
    else
    {
        let output = JSON.parse(body);
        //console.log(`Body: ${body}`);
        //console.log(output);
        message = `There is ${output.list[0].main.temp} °F or ${((output.list[0].main.temp - 32) * (5/9)).toFixed(2)} °C degrees in ${output.city.name}`;
        console.log(message);
    }
});