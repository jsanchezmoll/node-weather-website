const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianNhbmNoZXoyMDIxIiwiYSI6ImNrcXc2ZXMyazBsZWYyb28xd2o1a2tuZWgifQ.g4pJL_61k_x5Vh6NLy2NjQ'

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Ubable to connect to location services!', undefined)
        } else if( body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitud: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode