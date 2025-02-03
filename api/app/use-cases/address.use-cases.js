import { AddressRepository } from '../data-access/index.js';

class AddressUseCase {
    static async post(addressData, options = {}) {
        try {
            // Création de l'entreprise
            const newAddress = await AddressRepository.create(addressData, options);
            return newAddress;
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default AddressUseCase;
