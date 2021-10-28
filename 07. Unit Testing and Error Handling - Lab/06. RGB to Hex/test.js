const {assert} = require('chai');
const {rgbToHexColor} = require('./RGB to Hex');

describe('Test rgbToHexColor', () => {

    describe('Happy path', () => {
        it('converts white', () => {
            assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')
        });

        it('converts black', () => {
            assert.equal(rgbToHexColor(0, 0, 0), '#000000')
        });

        it('converts SoftUni dark blue to #234465', () => {
            assert.equal(rgbToHexColor(35, 68, 101), '#234465')
        });
    });

    describe('Invalid parameters', () => {
        it('return undefined for missing parameters', () => {
            assert.isUndefined(rgbToHexColor(255));
        });

        it('return undefined for values out of range', () => {
            assert.isUndefined(rgbToHexColor(-1, -1, -1));
            assert.isUndefined(rgbToHexColor(256, 265, 256));
        });

        it('return undefined for values out of range - red', () => {
            assert.isUndefined(rgbToHexColor(-1, 0, 0));
            assert.isUndefined(rgbToHexColor(256, 0, 0));
        });

        it('return undefined for values out of range - green', () => {
            assert.isUndefined(rgbToHexColor(0, -1, 0));
            assert.isUndefined(rgbToHexColor(0, 256, 0));
        });

        it('return undefined for values out of range - blue', () => {
            assert.isUndefined(rgbToHexColor(0, 0, -1));
            assert.isUndefined(rgbToHexColor(0, 0, 256));
        });

        it('return undefined for invalid parameter type', () => {
            assert.isUndefined(rgbToHexColor('0', '0', '0'));
            assert.isUndefined(rgbToHexColor(0, 0, '0'));
            assert.isUndefined(rgbToHexColor(0, '0', 0));
            assert.isUndefined(rgbToHexColor('0', 0, 0));
        });
    })
});