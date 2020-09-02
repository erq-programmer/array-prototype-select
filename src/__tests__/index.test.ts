const lodash = require('lodash');
const select = require('../index');

describe('Testing prototype select ', () => {
  const mockedArr: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].select(0, 3) must return [0, 1, 2]', () => {
    const expectedValue: Array<number> = [0, 1, 2];
    const output: Array<number> = mockedArr.select(0, 3);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('it return last element from array when first parametr is -1', () => {
    const arrWithString: Array<string> = ['erq', 'kosik', 'refix'];
    const expectedValue: Array<string> = ['refix'];
    const output: Array<string> = arrWithString.select(-1);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 1', () => {
    const expectedValue: Array<number> = [1, 2, 3, 4];
    const output: Array<number> = mockedArr.select(1, 5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 2', () => {
    const expectedValue: Array<number> = [0, 2];
    const output: Array<number> = mockedArr.select(0, 4, 2);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 3', () => {
    const expectedValue: Array<number> = [5, 6, 7, 8, 9];
    const output: Array<number> = mockedArr.select(-5, 0, 0);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 4', () => {
    const expectedValue: Array<number> = [0, 1, 2, 3, 4];
    const output: Array<number> = mockedArr.select(0, -5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });

  it('is example 5', () => {
    const expectedValue: Array<number> = [5, 6, 7];
    const output: Array<number> = mockedArr.select(-2, -5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });
});

describe('Testing Array.prototype.select parameters', () => {
  const mockedArr: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('it must return last 5 element from array when first parametr is -5', () => {
    const expectedValue: Array<number> = [5, 6, 7, 8, 9];
    const output: Array<number> = mockedArr.select(-5);

    const isEqualToExpectedValue = lodash.isEqual(expectedValue, output);

    expect(isEqualToExpectedValue).toBeTruthy();
  });
});
