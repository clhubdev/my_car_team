import IUserRepository from '../../domain/repositories/IUserRepository.js';
import UserModel from '../database/models/UserModel.js';

class SequelizeUserRepository extends IUserRepository {
  async create(userEntity, options = {}) {
    try {
      const created = await UserModel.create({
        name: userEntity.name,
        email: userEntity.email,
        password: userEntity.password,
      });
      return created;
    } catch (error) {
      console.log('error', error);
    }
  }

  async findById(id, options = {}) {
    const user = await UserModel.findByPk(id);
    return user;
  }

  async findByEmail(email, options = {}) {
    const user = await UserModel.findOne({ where: { email } }); 
    return user;
  }
}

export default SequelizeUserRepository;
