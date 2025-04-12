const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/User');

router.post('/login', (req, res) => {
  const { userId, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.userId === userId && u.password === password);

  if (user) {
    const token = user.role === 'Admin' ? 'admin-token' : 'user-token';
    res.json({ token, role: user.role, userId: user.userId });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
