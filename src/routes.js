const { Router } = require('express');
const expressJwt = require('express-jwt');

const app = require('./app');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

const jwtCheck = expressJwt({
  secret: 'secretkey',
});

routes.post('/login', UserController.login);

routes.get('/resource', (req, res) => {
  res.status(200).json({ success: 'Public resouse, you can see this' });
});

routes.get('/resource/secret', jwtCheck, (req, res) => {
  res
    .status(200)
    .json({ success: 'Secret resouse, you should be loggedin to see this' });
});

routes.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = routes;
