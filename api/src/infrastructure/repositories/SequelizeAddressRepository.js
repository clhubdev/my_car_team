import IAddressRepository from '../../domain/repositories/IAddressRepository.js';
import AddressModel from '../database/models/AddressModel.js';

class SequelizeAddressRepository extends IAddressRepository {
    async create(addressEntity, options = {}) {
        try {
            const created = await AddressModel.create({
                street: addressEntity.street,
                zip: addressEntity.zip,
                city: addressEntity.city,
                country: addressEntity.country,
            });
            return created;
        } catch (error) {
            console.log(error)
        }
    }

    async findById(id, options = {}) {
        const address = await AddressModel.findByPk(id);
        return address;
    }
}

export default SequelizeAddressRepository;