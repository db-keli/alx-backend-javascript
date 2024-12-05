const request = require("request");
const expect = require("chai").expect;

describe("Index page", function () {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    }

    it("should return correct status code", function (done) {
        request(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct content", function (done) {
        request(options, function (err, res, body) {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

describe("Cart page", function () {
    const cartUrl = "http://localhost:7865/cart/";

    it("should return correct status code for valid cart id", function (done) {
        const cartId = 12;
        request.get(cartUrl + cartId, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct content for valid cart id", function (done) {
        const cartId = 12;
        request.get(cartUrl + cartId, function (err, res, body) {
            expect(body).to.contain("Payment methods for cart " + cartId);
            done();
        });
    });

    it("should return correct status code for invalid cart id", function (done) {
        const cartId = "kim";
        request.get(cartUrl + cartId, function (err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
