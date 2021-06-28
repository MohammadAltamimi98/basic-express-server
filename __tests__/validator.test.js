'use strict';

const validator = require('../src/middleware/validator');



describe('validator', () => {
  it('returning query name', () => {
    let req = {
      query: {
        name: 'mohammad',
      },
    };
    let res = {};
    let next = jest.fn();
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
  it('handling no query', () => {
    let req = {
      query: {
        name: '',
      },
    };
    let res = {};
    let next = jest.fn();
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Query Name is not valid.');
  });
});