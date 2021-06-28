'use strict';
const server = require('../src/server');
const supertest = require('supertest');

const mockRequest = supertest(server.app);

describe('API server', () => {

  it('404 bad route', async () => {
    let route = '/foo';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(404);
  });
  it('404 bad method', async () => {
    let route = '/';
    const response = await mockRequest.post(route);
    expect(response.status).toBe(404);
  });
  it('500 No Name in query', async () => {
    let route = '/person?name=';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(500);
  });
  it('200 string in the query', async () => {
    let route = '/person?name=mohammad';
    const response = await mockRequest.get(route);
    let parsedData = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(parsedData).toEqual({
      name: 'mohammad',
    });
  });
  it('root route called', async () => {
    let route = '/';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello From mohammad.');
  });

});