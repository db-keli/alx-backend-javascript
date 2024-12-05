const Utils = require("./utils");
const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, "calculateNumber");
    });

    afterEach(() => {
        spy.restore();
    });

    it("should call Utils.calculateNumber once", () => {
        sendPaymentRequestToApi(50, 24.52);
        assert(spy.calledOnce);
    });
});
