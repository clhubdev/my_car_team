import config from "./env.config.js";
import SequelizeUserRepository from "../infrastructure/repositories/SequelizeUserRepository.js";
import SequelizeAddressRepository from "../infrastructure/repositories/SequelizeAddressRepository.js";
import SequelizeEntrepriseRepository from "../infrastructure/repositories/SequelizeEntrepriseRepository.js";
import SequelizeEmployeeRepository from "../infrastructure/repositories/SequelizeEmployeeRepository.js";
import BcryptPasswordHasher from "../infrastructure/security/BcryptPasswordHasher.js";
import TokenAuthentification from "../infrastructure/security/TokenAuthentification.js";
import EntrepriseService from "../application/services/EntrepriseService.js";
import UserService from "../application/services/UserService.js";
import sequelize from '../infrastructure/database/index.js';

const userRepository = new SequelizeUserRepository();
const addressRepository = new SequelizeAddressRepository();
const entrepriseRepository = new SequelizeEntrepriseRepository();
const employeeRepository = new SequelizeEmployeeRepository();
const passwordHasher = new BcryptPasswordHasher();
const tokenAuthentification = new TokenAuthentification(config.jsonWebTokenSecret);

const entrepriseService = new EntrepriseService(userRepository, passwordHasher, entrepriseRepository, employeeRepository, addressRepository, sequelize);
const userService = new UserService(userRepository, passwordHasher, tokenAuthentification);

export { entrepriseService, userService };