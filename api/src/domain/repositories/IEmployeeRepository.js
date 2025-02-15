class IEmployeeRepository {
    async create(user, options = {}) {
        throw new Error('Not implemented');
    }

    async findById(id, options = {}) {
        throw new Error('Not implemented');
    }
}

export default IEmployeeRepository;