const { assert } = require('chai');
const { mathEnforcer } = require('./Math Enforcer');

describe('Test mathEnforcer', () => {

    it('has all methods', () => {
        assert.property(mathEnforcer, 'addFive');
        assert.property(mathEnforcer, 'subtractTen');
        assert.property(mathEnforcer, 'sum');
    });

    it('mathEnforcer.addFive returns input+5 for correct input', () => {
        assert.closeTo(mathEnforcer.addFive(-1), 4, 0.1);
        assert.closeTo(mathEnforcer.addFive(1), 6, 0.1);
        assert.closeTo(mathEnforcer.addFive(1.5), 6.5, 0.1);
        assert.closeTo(mathEnforcer.addFive(1.999), 6.999, 0.1);
    });

    it('mathEnforcer.addFive returns undefined for incorrect input', () => {
        assert.isUndefined(mathEnforcer.addFive(''));
        assert.isUndefined(mathEnforcer.addFive('1'));
        assert.isUndefined(mathEnforcer.addFive('a'));
        assert.isUndefined(mathEnforcer.addFive('[]'));
        assert.isUndefined(mathEnforcer.addFive('{}'));
    });

    it('mathEnforcer.subtractTen returns input-10 for correct input', () => {
        assert.closeTo(mathEnforcer.subtractTen(-1), -11, 0.1);
        assert.closeTo(mathEnforcer.subtractTen(1), -9, 0.1);
        assert.closeTo(mathEnforcer.subtractTen(1.5), -8.5, 0.1);
        assert.closeTo(mathEnforcer.subtractTen(1.999), -8.001, 0.1);
        assert.closeTo(mathEnforcer.subtractTen(20), 10, 0.1);
    });

    it('mathEnforcer.subtractTen returns undefined for incorrect input', () => {
        assert.isUndefined(mathEnforcer.subtractTen(''));
        assert.isUndefined(mathEnforcer.subtractTen('1'));
        assert.isUndefined(mathEnforcer.subtractTen('a'));
        assert.isUndefined(mathEnforcer.subtractTen('[]'));
        assert.isUndefined(mathEnforcer.subtractTen('{}'));
    });

    it('mathEnforcer.sum returns sum of two correct inputs', () => {
        assert.closeTo(mathEnforcer.sum(1, 2), 3, 0.1);
        assert.closeTo(mathEnforcer.sum(1, 1.5), 2.5, 0.1);
        assert.closeTo(mathEnforcer.sum(1, -2), -1, 0.1);
        assert.closeTo(mathEnforcer.sum(1.5, -2), -0.5, 0.1);
        assert.closeTo(mathEnforcer.sum(1.999, -0.999), 1, 0.1);
    });

    it('mathEnforcer.sum returns undefined for incorrect input', () => {
        assert.isUndefined(mathEnforcer.sum());
        assert.isUndefined(mathEnforcer.sum(1));
        assert.isUndefined(mathEnforcer.sum(1, ''));
        assert.isUndefined(mathEnforcer.sum(1, '1'));
        assert.isUndefined(mathEnforcer.sum(1, 'a'));
        assert.isUndefined(mathEnforcer.sum(1, '[]'));
        assert.isUndefined(mathEnforcer.sum(1, '{}'));
        assert.isUndefined(mathEnforcer.sum('', 1));
        assert.isUndefined(mathEnforcer.sum('1', 1));
        assert.isUndefined(mathEnforcer.sum('a', 1));
        assert.isUndefined(mathEnforcer.sum('[]', 1));
        assert.isUndefined(mathEnforcer.sum('{}', 1));
    });
});