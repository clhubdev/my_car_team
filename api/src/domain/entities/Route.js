export default class Route {
    constructor(conductor, start, end, startPoint, endPoint, departureDatetime, availableSeats, price) {
        this.id = null;
        this.conductor = conductor;
        this.start = start;
        this.end = end;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.departureDatetime = departureDatetime;
        this.availableSeats = availableSeats;
        this.price = price;
    }
}