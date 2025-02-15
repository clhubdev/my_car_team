import request from 'supertest';
import app from '../../src/config/express.config';

describe('User Routes', () => {
  test('POST /user should create a new user', async () => {
    const response = await request(app)
      .post('/user')
      .send({ compagnyName: '3WA', compagnyPhone: '0164318515', compagnyEmail: '3wa@mail.com', employeeEmail: 'clement@mail.com', password: 'myPassword', lastname: 'HUBERT', firstname: 'Clément' });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
