function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (authHeader === 'Bearer admin-token') {
      req.user = { role: 'Admin', userId: 'admin' };
      next();
    } else if (authHeader === 'Bearer user-token') {
      req.user = { role: 'General User', userId: 'user1' };
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
  
  module.exports = authMiddleware;
  