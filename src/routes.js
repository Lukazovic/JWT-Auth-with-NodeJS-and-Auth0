const { Router } = require('express');

const app = require('./app');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post('/login', UserController.login);

routes.get('/resource', (req, res) => {
  res.status(200).json({ success: 'Public resouse, you can see this' });
});

routes.get('/resource/secret', (req, res) => {
  res
    .status(200)
    .json({ success: 'Secret resouse, you should be loggedin to see this' });
});

routes.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = routes;
