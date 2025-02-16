import User from '../../domain/entities/User.js';
import Employee from '../../domain/entities/Employee.js';
import Entreprise from '../../domain/entities/Entreprise.js';

class EntrepriseService {
    constructor(userRepository, passwordHasher, entrepriseRepository, employeeRepository, addressRepository, sequelize) {
      this.addressRepository = addressRepository;
      this.userRepository = userRepository;
      this.passwordHasher = passwordHasher;
      this.entrepriseRepository = entrepriseRepository;
      this.employeeRepository = employeeRepository;
      this.sequelize = sequelize;
    }
    
    async createEntreprise({ compagnyName, compagnyPhone, compagnyEmail, employeeEmail, password, lastname, firstname }) {

      const transaction = await this.sequelize.transaction();

      // Créer Entreprise
      const entreprise = new Entreprise(compagnyName, compagnyPhone, compagnyEmail);
     
      const newEntreprise = await this.entrepriseRepository.create(entreprise , { transaction });

      // Créer User
      const hashedPassword = await this.passwordHasher.hash(password);
      const user = new User(employeeEmail, hashedPassword);

      if(!user.validateEmail()) {
        throw new Error('Invalid email');
      }

      const newUser = await this.userRepository.create(user , { transaction });

      // Créer Employee
      const employee = new Employee(newUser.dataValues.id, newEntreprise.dataValues.id, lastname, firstname, employeeEmail, );
      await this.employeeRepository.create(employee , { transaction });

      await transaction.commit();

      delete newUser.dataValues.password;

      return newUser;
    }
  }
  
  export default EntrepriseService;