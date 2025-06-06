import config from "./env.config.js";

import SequelizeUserRepository from "../infrastructure/repositories/SequelizeUserRepository.js";
import SequelizeAddressRepository from "../infrastructure/repositories/SequelizeAddressRepository.js";
import SequelizeEntrepriseRepository from "../infrastructure/repositories/SequelizeEntrepriseRepository.js";
import SequelizeEmployeeRepository from "../infrastructure/repositories/SequelizeEmployeeRepository.js";
import SequelizeRouteRepository from "../infrastructure/repositories/SequelizeRouteRepository.js";
import SequelizeBookingRepository from "../infrastructure/repositories/SequelizeBookingRepository.js";

import BcryptPasswordHasher from "../infrastructure/adapters/BcryptPasswordHasher.js";
import TokenAuthentification from "../infrastructure/adapters/TokenAuthentification.js";
import OpenRouteServiceImpl from "../infrastructure/adapters/OpenRouteServiceImpl.js";
import sequelize from '../infrastructure/database/index.js';

import EntrepriseService from "../application/services/EntrepriseService.js";
import UserService from "../application/services/UserService.js";
import RouteService from "../application/services/RouteService.js";
import BookingService from "../application/services/BookingService.js";
import EmployeeService from "../application/services/EmployeeService.js";

const userRepository = new SequelizeUserRepository();
const addressRepository = new SequelizeAddressRepository();
const entrepriseRepository = new SequelizeEntrepriseRepository();
const employeeRepository = new SequelizeEmployeeRepository();
const routeRepository = new SequelizeRouteRepository();
const bookingRepository = new SequelizeBookingRepository();

const passwordHasher = new BcryptPasswordHasher();
const tokenAuthentification = new TokenAuthentification(config.jsonWebTokenSecret);
const apiRouteService = new OpenRouteServiceImpl(config.openRouteServiceKey);

const entrepriseService = new EntrepriseService(userRepository, passwordHasher, entrepriseRepository, employeeRepository, addressRepository, sequelize);
const userService = new UserService(userRepository, passwordHasher, tokenAuthentification);
const routeService = new RouteService(apiRouteService, routeRepository);
const bookingService = new BookingService(bookingRepository, routeRepository, sequelize);
const employeeService = new EmployeeService(employeeRepository);

export { entrepriseService, userService, routeService, tokenAuthentification, bookingService, employeeService };