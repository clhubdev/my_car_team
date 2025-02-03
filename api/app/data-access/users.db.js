import { User } from '../models/index.js'

class UserRepository {
  static async create(userData, options = {}) {
    try {
      const user = await User.create(userData, options);
      return user;
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      throw error;
    }
  }

  static async findByEmail(email, options = {}) {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur par email :", error);
    }
  }
}

export default UserRepository;