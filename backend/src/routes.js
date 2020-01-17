const { Router } = require('express');

const routes = Router();

const axios = require('axios');

//Tipos de parametros:

//Query parms: request.query ( filtors, ordenação, paginação...)
//Route parmas: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

// routes.get('/', (reuest, response) => {
//     console.log(request.query);
//     return response.json({ message: 'Hello World!'});
// });

// routes.delete('/user/:id', (reuest, response) => {
//     console.log(request.params);
//     return response.json({ message: 'Hello World!'});
// });

routes.post('/devs', async (request, response) => {
    console.log(request.body);
    
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const { name = login, avatar_url, bio} = apiResponse.data;

    console.log(name, avatar_url, bio, github_username);

    return response.json({ message: 'Hello World!'});
});

module.exports = routes;