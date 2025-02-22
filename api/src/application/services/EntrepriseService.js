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



    try {
      // Création de l'entreprise
      const entreprise = new Entreprise(compagnyName, compagnyPhone, compagnyEmail);
      const newEntreprise = await this.entrepriseRepository.create(entreprise, { transaction });

      //Hachage mot de passe  et création de l'utilisateur
      const hashedPassword = await this.passwordHasher.hash(password);
      const user = new User(employeeEmail, hashedPassword);
      const newUser = await this.userRepository.create(user, { transaction });

      // Création Employee
      const employee = new Employee(newUser.dataValues.id, newEntreprise.dataValues.id, lastname, firstname, employeeEmail);
      await this.employeeRepository.create(employee, { transaction });

      await transaction.commit();

      // Sécurité : Suppression du mot de passe
      delete newUser.dataValues.password;

      return newUser;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }

  }
}

export default EntrepriseService;