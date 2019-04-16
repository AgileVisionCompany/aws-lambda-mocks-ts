"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
var aws_sdk_1 = require("aws-sdk");
exports.mockAwsServiceRequest = function (response, callback, service, operation) {
    callback(response.err, response.data);
    return new aws_sdk_1.Request(!!service ? service : new AWS.Service(), !!operation ? operation : "test_operation");
};
var CallbackResponse = /** @class */ (function () {
    function CallbackResponse(err, data) {
        this.err = err;
        this.data = data;
    }
    return CallbackResponse;
}());
exports.CallbackResponse = CallbackResponse;
