import bcrypt from 'bcryptjs';
import IPasswordHasher from '../../domain/ports/IPasswordHasher.js';

class BcryptPasswordHasher extends IPasswordHasher {
  async hash(password) {
    return bcrypt.hash(password, 10);
  }

  async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

export default BcryptPasswordHasher;