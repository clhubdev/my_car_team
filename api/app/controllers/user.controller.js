import { AddressUseCase, EmployeeUseCase, EntrepriseUseCase, UserUseCase, BusinessAccountEmployeeUseCase } from '../use-cases/index.js';
import sequelize from '../database.js';

class UserController {
  static async createUser(req, res) {
    const transaction = await sequelize.transaction();

    try {
      // Étape 1 : Création de l'adresse
      const { street, postal_code, city, country } = req.body;
      const addressData = { street, postal_code, city, country };
      const newAddress = await AddressUseCase.post(addressData, { transaction });
  
      // Étape 2 : Création de l'entreprise
      const { name, registrationNumber, vatNumber, phone, email, industry, numberOfEmployees, incorporationDate } = req.body;
      const entrepriseData = {
        name,
        registrationNumber,
        vatNumber,
        phone,
        email,
        industry,
        numberOfEmployees,
        incorporationDate,
        headOfficeAddress: newAddress.dataValues.id,
      };
      const newEntreprise = await EntrepriseUseCase.post(entrepriseData, { transaction });
  
      // Étape 3 : Création de l'utilisateur
      const { identifiant, password } = req.body;
      const userData = { email: identifiant, password };
      const newUser = await UserUseCase.postUser(userData, { transaction });
  
      // Étape 4 : Création de l'employé
      const { lastname, firstname, birthday, gender, employeePhone } = req.body;
      const employeeData = {
        entreprise_id: newEntreprise.dataValues.id,
        user_id: newUser.dataValues.id,
        lastname,
        firstname,
        birthday,
        gender,
        phone: employeePhone,
      };
      const newEmployee = await EmployeeUseCase.post(employeeData, { transaction });
  
      // Étape 5 : Association de l'employé au compte entreprise
      await BusinessAccountEmployeeUseCase.post(
        { entreprise_id: newEntreprise.dataValues.id, employee_id: newEmployee.dataValues.id },
        { transaction }
      );
  
      // Validation de la transaction
      await transaction.commit();
  
      return res.status(201).json(newUser);
    } catch (error) {
      // Annulation de la transaction en cas d'erreur
      await transaction.rollback();
      return res.status(400).json({ message: error.message });
    }
  }
  
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const userData = { email, password };
      const user = await UserUseCase.login(userData);
      
      res.cookie('token', user.token, {
        maxAge: 24 * 60 * 60 * 1000, // 24 heures
        httpOnly: true, // Le cookie n'est pas accessible via JavaScript côté client
      });

      return res.status(200).json({
        message: "Connexion réussie",
        user: user.user,
      });

    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;