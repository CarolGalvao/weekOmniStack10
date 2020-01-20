const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require ('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {

    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
    console.log(request.body);
    
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({github_username});

    if(!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio} = apiResponse.data;

        let techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
    
        console.log(name, avatar_url, bio, github_username);
    }

    return response.json(dev);
}
};