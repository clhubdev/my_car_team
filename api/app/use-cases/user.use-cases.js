import { UserRepository } from '../data-access/index.js';
import PasswordHasher from '../utils/PasswordHasher.js';
import JsonWebToken from '../utils/JsonWebToken.js';

class UserUseCase {
  static async postUser(userData, options = {}) {
    try {
      // Validation métier
      if (!userData.email || !userData.password) {
        throw new Error("Email et mot de passe sont requis.");
      }

      // Logique métier
      const existingUser = await UserRepository.findByEmail(userData.email);
      if (existingUser) {
        throw new Error("Cet email est déjà utilisé.");
      }

      userData.password = await PasswordHasher.hashPassword(userData.password);

      // Création de l'utilisateur
      const newUser = await UserRepository.create(userData, options);
      return newUser;
    } catch (error) {
      throw new Error(error)
    }
  }

  static async login(userData) {
    try {
      if (!userData.email || !userData.password) {
        throw new Error("Email et mot de passe sont requis.");
      }

      const user = await UserRepository.findByEmail(userData.email);
      if (!user) {
        throw new Error("L'utilisateur n'existe pas.");
      }

      const validPassword = await PasswordHasher.comparePasswords(userData.password, user.password);
      if (!validPassword) {
        throw new Error("L'email et/ou le mot de passe sont erronés.");
      }

      const token = await JsonWebToken.createToken(user.id);
      console.log(token)

      return {
        user: {
          id: user.id,
          email: user.email,
        },
        token
      };
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default UserUseCase;
