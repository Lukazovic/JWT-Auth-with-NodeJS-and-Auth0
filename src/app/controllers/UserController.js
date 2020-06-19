class UserController {
  login(req, res) {
    const { username } = req.body;

    res.json({ success: `You logged in with ${username}` });
  }
}

module.exports = new UserController();
