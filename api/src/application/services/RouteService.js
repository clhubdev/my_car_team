import Route from '../../domain/entities/Route.js';

export default class RouteService {
    constructor(routeService, routeRepository) {
        this.routeService = routeService;
        this.routeRepository = routeRepository;
    }

    async createRoute(data) {
        try {
            const route = new Route(data.conductor, data.start, data.end, data.startPoint, data.endPoint, data.departureDatetime, data.availableSeats, data.price);
            return await this.routeRepository.create(route);
        } catch (error) {
            throw new Error(error);
        }

    }

    async getRouteById(routeId) {
        try {
            return await this.routeRepository.getById(routeId);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllRoutesByEntreprise(entrepriseId) {
        try {
            return await this.routeRepository.getRoutesByEntreprise(entrepriseId);
        } catch (error) {
            throw new Error(error);
        }

    }

    async getSuggestions(query) {
        return this.routeService.getAutoCompleteAddress(query);
    }

    async getCoordinates(address) {
        return this.routeService.getCoordinates(address);
    }

    async getProfileRoute(startCoord, endCoord) {
        return this.routeService.getProfileRoute(startCoord, endCoord);
    }
}