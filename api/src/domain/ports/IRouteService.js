/**
 * Interface for route services.
 * Provides methods to interact with route-related functionalities such as getting coordinates, calculating distances, and fetching autocomplete address suggestions.
 *
 * @interface IRouteService
 */

/**
 * Return coordinates for a given address.
 *
 * @function
 * @name IRouteService#getCoordinates
 * @param {string} address - The address to get coordinates for.
 * @returns {Promise<string>} A promise that resolves to the coordinates (longitude, latitude).
 * @throws {Error} Throws an error if the method is not implemented.
 */

/**
 * Calculates the distance in meters between two points.
 *
 * @function
 * @name IRouteService#getDistanceMeters
 * @param {string} start - The starting point (coordinates: longitude, latitude).
 * @param {string} end - The ending point (coordinates: longitude, latitude).
 * @returns {Promise<number>} A promise that resolves to the distance in meters.
 * @throws {Error} Throws an error if the method is not implemented.
 */

/**
 * Fetches autocomplete address suggestions based on the provided query.
 *
 * @function
 * @name IRouteService#getAutoCompleteAddress
 * @param {string} query - The search query for the address.
 * @returns {Promise<Object>} A promise that resolves to the autocomplete address data.
 * @throws {Error} Throws an error if the method is not implemented.
 */
export default class IRouteService {
    /**
     * Return coordinates for a given address.
     *
     * @param {string} address - The address to get coordinates for.
     * @returns {Promise<string>} A promise that resolves to the coordinates (longitude, latitude).
     * @throws {Error} Throws an error if the method is not implemented.
     */
    async getCoordinates(address) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }


    /**
     * Calculates the distance in meters between two points.
     *
     * @param {string} start - The starting point (coordinates: longitude, latitude)
     * @param {string} end - The ending point (coordinates: longitude, latitude)
     * @returns {Promise<number>} - A promise that resolves to the distance in meters.
     * @throws {Error} Throws an error if the method is not implemented.
     */
    async getDistanceMeters(start, end) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }


    /**
     * Fetches autocomplete address suggestions based on the provided query.
     *
     * @param {string} query - The search query for the address.
     * @returns {Promise<Object>} A promise that resolves to the autocomplete address data.
     * @throws Will throw an error if the fetch operation fails.
     */
    async getAutoCompleteAddress(query) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}