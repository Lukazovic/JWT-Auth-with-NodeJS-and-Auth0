const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'guest', password: 'guest' },
];

class UserController {
  login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send('You need a username and password');
    }

    const user = users.find(userTest => {
      return userTest.username === username && userTest.password === password;
    });

    if (!user) {
      return res.status(401).send('User not found');
    }

    const token = jwt.sign(
      {
        sub: user.id,
        username,
      },
      'secretkey',
      { expiresIn: '3 hours' }
    );

    res.send({ access_token: token });
  }
}

module.exports = new UserController();
