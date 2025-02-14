import User from '../../domain/entities/User.js';

class CreateUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
    
    async execute(userData) {
      // Instanciation de l'entité avec POO
      const user = new User(userData);
      
      // Vous pouvez effectuer des validations ou d'autres traitements ici
      if (!user.validateEmail()) {
        throw new Error('Email invalide');
      }
      
      // Sauvegarde en base via le repository
      return await this.userRepository.create(user);
    }
  }
  
  export default CreateUser;