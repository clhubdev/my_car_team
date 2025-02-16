import IEntrepriseRepository from "../../domain/repositories/IEntrepriseRepository.js";
import EntrepriseModel from "../database/models/EntrepriseModel.js";

class SequelizeEntrepriseRepository extends IEntrepriseRepository {
    async create(entrepriseEntity, options = {}) {
        try {
            const created = await EntrepriseModel.create({
                address: entrepriseEntity.address,
                name: entrepriseEntity.name,
                registrationNumber: entrepriseEntity.registrationNumber,
                vatNumber: entrepriseEntity.vatNumber,
                phone: entrepriseEntity.phone,
                email: entrepriseEntity.email,
                industry: entrepriseEntity.industry,
                numberOfEmployees: entrepriseEntity.numberOfEmployees,
                incorporationDate: entrepriseEntity.incorporationDate
            });
            return created;
        } catch (error) {
            console.error(error)
        }
    }

    async findById(id, options = {}) {
        const entreprise = await EntrepriseModel.findByPk(id);
        return entreprise;
    }
}

export default SequelizeEntrepriseRepository;