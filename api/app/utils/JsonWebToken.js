import jwt from 'jsonwebtoken';
import config from '../config.js';

class JsonWebToken {
    static async createToken(userId) {
        return jwt.sign({userId}, config.jsonWebTokenSecret, { expiresIn: '24h' })
    }
}

export default JsonWebToken;