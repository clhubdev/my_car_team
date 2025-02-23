import request from 'supertest';
import app from '../../src/config/express.config';

describe('Booking Routes', () => {
  test('POST /booking should create a new booking successfully', async () => {
    const bookingData = {
      employee_id: 1,
      route_id: 1,
      numberReservedSeats: 2,
    };

    const response = await request(app)
      .post('/booking')
      .send(bookingData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.employee_id).toBe(bookingData.employee_id);
    expect(response.body.route_id).toBe(bookingData.route_id);
    expect(response.body.numberReservedSeats).toBe(bookingData.numberReservedSeats);
  });

  test('POST /booking should return an error if reservation exceeds available seats', async () => {
    const bookingData = {
      employee_id: 1,
      route_id: 1,
      numberReservedSeats: 100, // Simulation d'une demande excessive
    };

    const response = await request(app)
      .post('/booking')
      .send(bookingData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', "Il n'y a plus de places disponibles");
  });
});

