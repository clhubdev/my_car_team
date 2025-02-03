import { Address } from '../models/index.js'

class AddressRepository {
  static async create(addresseData, options = {}) {
    try {
      const newAddresse = await Address.create(addresseData, options);
      return newAddresse;
    } catch (error) {
      console.error("Erreur lors de la création de l'adresse :", error);
      throw error;
    }
  }
}

export default AddressRepository;