class IUserRepository {
    async create(user, options = {}) {
      throw new Error('Not implemented');
    }
    
    async findById(id, options = {}) {
      throw new Error('Not implemented');
    }

    async findByEmail(email, options = {}) {
      throw new Error('Not implemented');
    }
  }
  
  export default IUserRepository;