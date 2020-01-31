import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Bruno',
        email: 'bruno@mgil.com',
        password_hash: 'sasf45',
      });

    expect(response.body).toHaveProperty('id');
  });
});
