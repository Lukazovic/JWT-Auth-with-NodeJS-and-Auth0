const { Router } = require('express');
const app = require('./app');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post('/login', UserController.login);

routes.get('/status', (req, res) => {
  const localTime = new Date().toLocaleTimeString();

  res.status(200).send(`Server time is ${localTime}`);
});

routes.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = routes;
