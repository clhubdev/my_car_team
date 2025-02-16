import IRouteRepository from "../../domain/repositories/IRouteRepository.js";
import RouteModel from "../database/models/RouteModel.js";

export default class SequelizeRouteRepository extends IRouteRepository {
    async create(route, options = {}) {
        try {
            const newRoute = await RouteModel.create(route, options);
            return newRoute;
        } catch (error) {
            console.error(error)
            throw new Error(error);
        }
    }
}