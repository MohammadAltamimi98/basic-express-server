'use strict';
const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach (() => {
    consoleSpy = jest.spyOn (console, 'log').mockImplementation();
  });

  afterEach (() => {
    consoleSpy.mockRestore();
  });

  it ('logs output correctly', () => {
    loggerMiddleware (req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it ('Moves To next Middleware', () => {
    loggerMiddleware (req,res,next);
    expect(next).toHaveBeenCalled();
  });


});