const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    let consoleLogSpy;

    beforeEach(function() {
        consoleLogSpy = sinon.spy(console, "log");
    });

    afterEach(function() {
        consoleLogSpy.restore();
    });

    it("should call console.log with the correct argument", function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.withArgs("The total is: 120").calledOnce).to.be.true;
    });

    it("should call console.log with the correct argument", function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
