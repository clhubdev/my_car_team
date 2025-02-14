import { AddressUseCase, EmployeeUseCase, EntrepriseUseCase, UserUseCase, BusinessAccountEmployeeUseCase } from '../use-cases/index.js';
import sequelize from '../database.js';

class UserController {
  static async createUser(req, res) {
    const transaction = await sequelize.transaction();

    console.log(req.body)

    try {
      // Création de l'entreprise
      const { companyName, compagnyPhone, compagnyEmail} = req.body;
      const entrepriseData = {
        name: companyName, 
        phone: compagnyPhone, 
        email:compagnyEmail,
      };
      const newEntreprise = await EntrepriseUseCase.post(entrepriseData, { transaction });
  
      // Création de l'user
      const { employeeEmail, password } = req.body;
      const userData = { email: employeeEmail, password };
      const newUser = await UserUseCase.postUser(userData, { transaction });
  
      // Création de l'employé
      const { lastname, firstname } = req.body;
      const employeeData = {
        entreprise_id: newEntreprise.dataValues.id,
        user_id: newUser.dataValues.id,
        lastname,
        firstname,
      };
      const newEmployee = await EmployeeUseCase.post(employeeData, { transaction });
    
      // Association de l'employé au compte entreprise
      await BusinessAccountEmployeeUseCase.post({ entreprise_id: newEntreprise.dataValues.id, employee_id: newEmployee.dataValues.id }, { transaction });
      
      await transaction.commit();
  
      return res.status(201).json(newUser);

    } catch (error) {
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
        httpOnly: true, // Le cookie n'est pas accessible via JavaScript côté client (sécurité)
        secure: process.env.NODE_ENV === 'production', // utilisation HTTPS (sécurité)
        sameSite: 'strict', // protection faille CSRF (sécurité)
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