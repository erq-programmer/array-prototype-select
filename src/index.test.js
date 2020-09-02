const select = require('./index.js');
const lodash = require('lodash');

Array.prototype.select = select;

describe('Testing prototype function', () => {
  const mockedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('is example 0', () => {
    const expectedValue = [0, 1, 2];
    const output = mockedArr.select(0, 3);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 1', () => {
    const expectedValue = [1, 2, 3, 4];
    const output = mockedArr.select(1, 5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 2', () => {
    const expectedValue = [0, 2];
    const output = mockedArr.select(0, 4, 2);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 3', () => {
    const expectedValue = [5, 6, 7, 8, 9];
    const output = mockedArr.select(-5, 0, 0);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 4', () => {
    const expectedValue = [0, 1, 2, 3, 4];
    const output = mockedArr.select(0, -5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 5', () => {
    const expectedValue = [5, 6, 7];
    const output = mockedArr.select(-2, -5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });
});
