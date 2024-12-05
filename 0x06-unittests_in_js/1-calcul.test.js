const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    it('should return 4 when type is SUM and inputs are 1.6 and 2.4', function () {
        assert.strictEqual(calculateNumber('SUM', 1.6, 2.4), 4);
    });
    it('should return 0 when type is SUBTRACT and inputs are 2.5 and 2.5', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });
    it('should return 0.2 when type is DIVIDE and inputs are 1 and 5', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 5), 0.2);
    });
    it('should return 0 when type is SUM and inputs are 0 and 0', function () {
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
    it('should return Error when type is DIVIDE and inputs are 1 and 0', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUM", 1, 2);
        assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUBTRACT", 1.4, 2.2);
        assert.strictEqual(res, -1);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUBTRACT", 4.9, 2.7);
        assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 4, 2);
        assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 1.7, 0);
        assert.strictEqual(res, "Error");
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 1.4, 4.6);
        assert.strictEqual(res, 0.2);
    });
});
