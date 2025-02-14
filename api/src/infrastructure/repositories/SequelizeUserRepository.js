import UserRepository from '../../domain/repositories/UserRepository.js';
import UserModel from '../models/UserModel.js';

class SequelizeUserRepository extends UserRepository {
  async create(userEntity) {
    // Mappez l'entité métier aux champs du modèle Sequelize
    const created = await UserModel.create({
      name: userEntity.name,
      email: userEntity.email,
    });
    // Retournez l'entité créée ou sa représentation
    return created;
  }

  async findById(id) {
    const user = await UserModel.findByPk(id);
    return user;
  }
}

export default SequelizeUserRepository;
