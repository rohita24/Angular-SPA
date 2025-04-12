const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  const delay = parseInt(req.query.delay || 3000);

  setTimeout(() => {
    if (req.user.role === 'Admin') {
      res.json(getUsers());
    } else {
      const user = getUsers().find(u => u.userId === req.user.userId);
      res.json([user]);
    }
  }, delay);
});

module.exports = router;
