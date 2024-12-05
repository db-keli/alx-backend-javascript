const Utils = require("./utils");
const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
    let consoleLogSpy;
    let calculateNumberStub;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, "log");
        calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    });

    afterEach(() => {
        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });

    it("should stub Utils.calculateNumber and log the correct total", () => {
        sendPaymentRequestToApi(100, 20);

        assert(consoleLogSpy.withArgs("The total is: 10").calledOnce);
        assert(calculateNumberStub.withArgs("SUM", 100, 20).calledOnce);
    });
});
