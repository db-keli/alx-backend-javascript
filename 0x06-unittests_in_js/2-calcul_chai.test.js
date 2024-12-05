const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
    describe("SUBTRACT", function () {
        it("should round the result", function () {
            expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
            expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
            expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
        });
    });

    describe("DIVIDE", function () {
        it("should round the result", function () {
            expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
            expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
            expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
        });
    });

    describe("SUM", function () {
        it("should round the result", function () {
            expect(calculateNumber("SUM", 1, 2)).to.equal(3);
            expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
        });
    });
});
