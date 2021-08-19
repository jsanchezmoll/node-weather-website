const request = require('request')

const forecast = (latitude, longitud, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=be99d67c842090bcd43fac19982dec29&query='+latitude+','+longitud

    request({ url, json: true },(error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. Therre is a ' + body.current.precip +  '% chance of rain')
        }
    })
}

module.exports = forecast