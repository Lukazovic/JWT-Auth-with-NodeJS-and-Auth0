const { Router } = require('express');
const expressJwt = require('express-jwt');

const app = require('./app');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

const jwtCheck = expressJwt({
  secret: process.env.AUTH0_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
});

routes.post('/login', UserController.login);

routes.get('/resource', (req, res) => {
  res.status(200).send('Public resource, you can see this');
});

routes.get('/resource/secret', jwtCheck, (req, res) => {
  res.status(200).send('Secret resource, you should be logged in to see this');
});

routes.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = routes;
