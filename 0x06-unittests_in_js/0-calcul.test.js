const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { it, describe } = require("mocha");

describe('calculateNumber', function () {
    it('should return 4 when inputs are 1.6 and 2.4', function () {
        assert.strictEqual(calculateNumber(1.6, 2.4), 4);
    });
    it('should return 6 when inputs are 2.5 and 2.5', function () {
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });
    it('should return -4 when inputs are -2.5 and -2.5', function () {
        assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
    });
    it('should return 0 when inputs are 0 and 0', function () {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2);
    });
});
