const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'guest', password: 'guest' },
];

class UserController {
  login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'You must provide a username and password' });
    }

    const user = users.find(userTest => {
      return userTest.username === username && userTest.password === password;
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const token = jwt.sign(
      {
        sub: user.id,
        username,
      },
      'secretkey',
      { expiresIn: '3 hours' }
    );

    res.json({ username, token });
  }
}

module.exports = new UserController();
