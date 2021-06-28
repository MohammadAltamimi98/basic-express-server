'use strict';
const server = require('../src/server');
const supertest = require('supertest');

const mockRequest = supertest(server.app);

describe('API server', () => {

  it('Right path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
  });

  it('bad route', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(404);
  });

  it('bad method', async () => {
    const response = await mockRequest.post('/person');
    expect(response.status).toEqual(404);
  });

});