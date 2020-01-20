const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require ('./controllers/SearchController');

const routes = Router();

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

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );

routes.get('/search', SearchController.index);

module.exports = routes;