export default function verifyTokenMiddleware(tokenAuth) {
    return function verifyTokenMiddleware(req, res, next) {

      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ message: 'Token manquant' });
      }
      try {
        const decoded = tokenAuth.verifyToken(token);
        req.user = decoded;
        next();
      } catch (error) {
        return res.status(403).json({ message: 'Token invalide' });
      }

    };
  }