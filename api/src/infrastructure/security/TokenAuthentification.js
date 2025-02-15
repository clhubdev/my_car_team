import jwt from 'jsonwebtoken';
import ITokenAuthentification from '../../domain/ports/ITokenAuthentification.js';

class TokenAuthentification extends ITokenAuthentification {
    constructor(secret, options = {}) {
        super();
        this.secret = secret;
        this.options = options;
    }

    generateToken(payload) {
        return jwt.sign(payload, this.secret, this.options);
    }

    verifyToken(token) {
        return jwt.verify(token, this.secret);
    }
}

export default TokenAuthentification;