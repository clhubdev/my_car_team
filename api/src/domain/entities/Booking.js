export default class Booking {
    constructor(employee_id, route_id, numberReservedSeats) {
        this.id = null;
        this.employee_id = employee_id;
        this.route_id = route_id;
        this.numberReservedSeats = numberReservedSeats;
        this.isValidate = false;
    }

    /**
     * Création de réservation 
     * @param {number} employee_id - Identifiant de l'employé.
     * @param {number} route_id - Identifiant de l'itinéraire.
     * @param {number} numberReservedSeats - Nombre de places à réserver.
     * @param {number} availableSeats - Nombre total de places disponibles sur la route.
     * @param {number} totalReservedSeats - Nombre total de places déjà réservées.
     * @returns {Booking} Une instance de Booking si la réservation est valide.
     * @throws {Error} Si la réservation dépasse la capacité disponible.
     */
    static create(employee_id, route_id, numberReservedSeats, availableSeats, totalReservedSeats) {
        if (Number(totalReservedSeats) + Number(numberReservedSeats) > Number(availableSeats)) {
            throw new Error("Il n'y a plus de places disponibles");
        }
        return new Booking(employee_id, route_id, numberReservedSeats);
    }
}
