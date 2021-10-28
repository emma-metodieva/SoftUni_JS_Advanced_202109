const { assert } = require('chai');
const { sum } = require('./Sum of Numbers');

describe('Test sum', () => {
    it('returns 3 for [1, 2]', () => {
        assert.equal(sum([1, 2]), 3);
    });

    it('returns 1 for [1]', () => {
        assert.equal(sum([1]), 1);
    });

    it('returns 0 for []', () => {
        assert.equal(sum([]), 0);
    });
});