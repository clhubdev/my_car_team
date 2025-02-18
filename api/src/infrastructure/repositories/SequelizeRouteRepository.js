import IRouteRepository from "../../domain/repositories/IRouteRepository.js";
import RouteModel from "../database/models/RouteModel.js";
import EmployeeModel from "../database/models/EmployeeModel.js";

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

    async getById(routeId, options = {}) {
        try {
            const route = await RouteModel.findByPk(routeId, {
                ...options,
                include: [{
                    model: EmployeeModel,
                    as: 'employee'
                }]
            });
            return route;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    async getRoutesByEntreprise(entrepriseId, options = {}) {
        try {
            const routes = await RouteModel.findAll({
                include: [{
                    model: EmployeeModel,
                    as: 'employee',
                    where: { entreprise_id: entrepriseId },
                    required: true
                }],
                ...options
            });
            return routes;
        } catch (error) {
            console.error(error)
            throw new Error(error);
        }
    }
}