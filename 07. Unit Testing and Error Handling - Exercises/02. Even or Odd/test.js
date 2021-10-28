const { assert } = require('chai');
const { isOddOrEven } = require('./Even or Odd');

describe('Test isOddOrEven', () => {
    it('returns "even" for string with length = 2', () => {
        assert.equal(isOddOrEven('aa'), 'even')
    });

    it('returns "odd" for string with length = 1', () => {
        assert.equal(isOddOrEven('a'), 'odd')
    });

    it('works for multiple executions in a row', () => {
        assert.equal(isOddOrEven('aa'), 'even');
        assert.equal(isOddOrEven('a'), 'odd');
        assert.equal(isOddOrEven('aa'), 'even');
        assert.equal(isOddOrEven('a'), 'odd');
    });

    it('return undefined for input other than string ', () => {
        assert.isUndefined(isOddOrEven(123));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
    });
});