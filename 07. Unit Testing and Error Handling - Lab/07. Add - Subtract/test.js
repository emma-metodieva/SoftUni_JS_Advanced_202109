const { assert } = require('chai');
const { createCalculator } = require('./Add - Subtract');

describe('Test createCalculator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator()
    });

    it('starts empty', () => {
        assert.equal(instance.get(), 0)
    });

    it('has all methods', () => {
        assert.property(instance, 'add');
        assert.property(instance, 'subtract');
        assert.property(instance, 'get');
    });

    it('adds single number - Number', () => {
        instance.add(1);
        assert.equal(instance.get(), 1);
    });

    it('adds multiple numbers - Number', () => {
        instance.add(1);
        instance.add(2);
        assert.equal(instance.get(), 3);
    });

    it('subtracts single number - Number', () => {
        instance.subtract(1);
        assert.equal(instance.get(), -1);
    });

    it('subtracts multiple numbers - Number', () => {
        instance.subtract(1);
        instance.subtract(2);
        assert.equal(instance.get(), -3);
    });

    it('adds and subtracts numbers - Number', () => {
        instance.add(1);
        instance.subtract(2);
        assert.equal(instance.get(), -1);
    });

    it('adds and subtracts numbers - Strings', () => {
        instance.add('1');
        instance.add('2');
        instance.subtract('3');
        instance.subtract('4');
        assert.equal(instance.get(), -4);
    });

});