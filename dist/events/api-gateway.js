export var mockApiGatewayEvent = function (path, body, method, pathParameters, headers, queryStringParameters, resourcePath, stage, requestContext) {
    return {
        path: path,
        body: !!body ? body : null,
        headers: !!headers ? Object.assign(defaultHeaders, headers) : defaultHeaders,
        multiValueHeaders: {},
        httpMethod: !!method ? method : "GET",
        isBase64Encoded: false,
        pathParameters: !!pathParameters ? pathParameters : null,
        queryStringParameters: !!queryStringParameters
            ? queryStringParameters
            : null,
        multiValueQueryStringParameters: null,
        stageVariables: null,
        requestContext: !!requestContext
            ? Object.assign(defaultApiGatewayEventRequestContext(path, resourcePath, method, stage), requestContext)
            : defaultApiGatewayEventRequestContext(path, resourcePath, method, stage),
        resource: "resource"
    };
};
var defaultHeaders = {
    "accept": "application/json",
    "cache-control": "no-cache",
    "host": "localhost",
    "connection": "keep-alive"
};
var defaultApiGatewayEventRequestContext = function (path, resourcePath, method, stage) {
    return {
        accountId: "test_account_id",
        apiId: "api_id",
        authorizer: null,
        connectedAt: new Date().getTime() - 1000,
        httpMethod: !!method ? method : "GET",
        identity: {},
        messageDirection: "IN",
        path: path,
        resourcePath: !!resourcePath ? resourcePath : "resourcePath",
        stage: !!stage ? stage : "dev",
        requestId: "req_id",
        requestTimeEpoch: new Date().getTime(),
        resourceId: "resource_id",
    };
};
export var mockLambdaContext = function (done, fail) {
    var runTime = new Date().getTime();
    var timeout = 60 * 1000;
    return {
        callbackWaitsForEmptyEventLoop: false,
        functionName: "functionName",
        invokedFunctionArn: "arn",
        memoryLimitInMB: 128,
        awsRequestId: "req_id",
        logGroupName: "log_group",
        logStreamName: "log_stream",
        getRemainingTimeInMillis: function () { return timeout - (new Date().getTime() - runTime); },
        done: !!done ? done : defaultDone,
        fail: !!fail ? fail : defaultFail,
        succeed: function (messageOrObject) {
            return;
        }
    };
};
var defaultDone = function (error, result) {
    return;
};
var defaultFail = function (err) {
    return;
};
export var mockCallback = function () {
    return function (error, result) {
        return;
    };
};
