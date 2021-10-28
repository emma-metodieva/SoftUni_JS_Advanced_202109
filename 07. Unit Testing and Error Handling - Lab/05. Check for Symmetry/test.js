const {assert} = require('chai');
const isSymmetric = require('./Check for Symmetry');

describe('Test isSymmetric', () => {
    it('returns true for symmetric array of even number of elements', () => {
        assert.isTrue(isSymmetric([1, 2, 2, 1]));
    });

    it('returns true for symmetric array of odd number of elements', () => {
        assert.isTrue(isSymmetric([1, 2, 3, 2, 1]));
    });

    it('returns true for array of string', () => {
        assert.isTrue(isSymmetric(['a', 'b', 'b', 'a']));
    });

    it('returns false for non-symmetric array', () => {
        assert.isFalse(isSymmetric([1, 2, 3]));
    });

    it('returns false for type-different symmetric array', () => {
        assert.isFalse(isSymmetric([1, 2, '1']));
    });


    it('returns false for non-array', () => {
        assert.isFalse(isSymmetric(5));
    });
});