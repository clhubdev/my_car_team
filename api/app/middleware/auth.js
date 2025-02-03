import jwt from 'jsonwebtoken';
import config from '../config.js';

export function authToken(req, res, next) {

    if(!req.headers.authorization){
        return res.status(403).send({ message: 'Missing token' });
    }

    const [,token] = req.headers.authorization.split(' ');

    try {
        jwt.verify(token, config.jsonWebTokenSecret)
        next();
    } catch (error) {
        return res.status(403).send({ message: 'Invalid token' });
    }
}