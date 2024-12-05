const request = require("request");
const expect = require("chai").expect;

describe("Index page", function () {
    it("should return status code 200 for a successful request", function (done) {
        const options = {
            url: "http://localhost:7865/index",
            json: true,
        };
        request.get(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe("Cart page", function () {
    it("should return status code 200 for a successful request", function (done) {
        const options = {
            url: "http://localhost:7865/cart",
            json: true,
        };
        request.get(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe("Available_payments page", function () {
    it("should return status code 200 for a successful request", function (done) {
        const options = {
            url: "http://localhost:7865/available_payments",
            json: true,
        };
        request.get(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe("Login", function () {
    it("should return status code 200 and welcome message for a valid user", function (done) {
        const options = {
            url: "http://localhost:7865/login",
            json: true,
            body: {
                username: "JohnDoe",
            },
        };
        request.post(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body).to.contain("Welcome JohnDoe");
            done();
        });
    });

    it("should return status code 404 for an invalid request", function (done) {
        const options = {
            url: "http://localhost:7865/login",
            json: true,
            body: {
                username: "InvalidUser",
            },
        };
        request.post(options, function (err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
