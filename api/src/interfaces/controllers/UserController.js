import SequelizeUserRepository from '../../infrastructure/repositories/SequelizeUserRepository.js';
import CreateUser from '../../application/useCases/CreateUser.js';

class UserController {
  async create(req, res) {
    try {
      const userRepository = new SequelizeUserRepository();
      const createUser = new CreateUser(userRepository);
      const user = await createUser.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
