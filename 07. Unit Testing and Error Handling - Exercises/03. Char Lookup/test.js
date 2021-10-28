const { assert } = require('chai');
const { lookupChar } = require('./Char Lookup');

describe('Test lookupChar', () => {
    it('returns the character at the specified index', () => {
        assert.equal(lookupChar('test', 0), 't')
        assert.equal(lookupChar('test', 1), 'e')
    });

    it('return undefined for the first parameter not being a string', () => {
        assert.isUndefined(lookupChar(['test'], 0));
        assert.isUndefined(lookupChar({'test': 'test'}, 0));
        assert.isUndefined(lookupChar(123, 0));
    });

    it('return undefined for second parameter not being an integer', () => {
        assert.isUndefined(lookupChar('test', '0'));
        assert.isUndefined(lookupChar('test', 't'));
        assert.isUndefined(lookupChar('test', 3.14));
    });

    it('return undefined for invalid parameters', () => {
        assert.isUndefined(lookupChar(['test'], 't'));
        assert.isUndefined(lookupChar({'test': 'test'}, 3.14));
    });

    it('return undefined for missing parameters', () => {
        assert.isUndefined(lookupChar('test'));
        assert.isUndefined(lookupChar(0));
    });

    it('returns "Incorrect index" for index out of range', () => {
        assert.equal(lookupChar('test', -2), 'Incorrect index');
        assert.equal(lookupChar('test', -1), 'Incorrect index');
        assert.equal(lookupChar('test', 4), 'Incorrect index');
        assert.equal(lookupChar('test', 5), 'Incorrect index');
    });
});