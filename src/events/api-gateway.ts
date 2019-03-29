import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
  Callback,
  Context
} from "aws-lambda/index";

export const mockApiGatewayEvent = (
  path: string,
  body?: string | object,
  method?: string,
  pathParameters?: { [name: string]: string },
  headers?: { [name: string]: string },
  queryStringParameters?: { [name: string]: string },
  resourcePath?: string,
  stage?: string,
  requestContext?: APIGatewayEventRequestContext
): APIGatewayProxyEvent => {
  return {
    path,
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
      ? Object.assign(
          defaultApiGatewayEventRequestContext(path, resourcePath, method, stage),
          requestContext
        )
      : defaultApiGatewayEventRequestContext(path, resourcePath, method, stage),
    resource: "resource"
  } as APIGatewayProxyEvent;
};

const defaultHeaders = {
  "accept":"application/json",
  "cache-control":"no-cache",
  "host": "localhost",
  "connection":"keep-alive"
};

const defaultApiGatewayEventRequestContext = (
  path: string,
  resourcePath?: string,
  method?: string,
  stage?: string
): APIGatewayEventRequestContext => {
  return {
    accountId: "test_account_id",
    apiId: "api_id",
    authorizer: null,
    connectedAt: new Date().getTime() - 1000,
    httpMethod: !!method ? method : "GET",
    identity: {},
    messageDirection: "IN",
    path,
    resourcePath: !!resourcePath ? resourcePath : "resourcePath",
    stage: !!stage ? stage : "dev",
    requestId: "req_id",
    requestTimeEpoch: new Date().getTime(),
    resourceId: "resource_id",
  } as APIGatewayEventRequestContext;
};

export const mockLambdaContext = (
  done?: (error?: Error, result?: any) => void,
  fail?: (err: Error | string) => void
): Context => {
  const runTime = new Date().getTime();
  const timeout = 60 * 1000;
  return {
    callbackWaitsForEmptyEventLoop: false,
    functionName: "functionName",
    invokedFunctionArn: "arn",
    memoryLimitInMB: 128,
    awsRequestId: "req_id",
    logGroupName: "log_group",
    logStreamName: "log_stream",
    getRemainingTimeInMillis: () => timeout - (new Date().getTime() - runTime),
    done: !!done ? done : defaultDone,
    fail: !!fail ? fail : defaultFail,
    succeed: messageOrObject => {
      return;
    }
  } as Context;
};

const defaultDone = (error?: Error, result?: any) => {
  return;
};
const defaultFail = (err: Error | string) => {
  return;
};

export const mockCallback = (): Callback => {
  return (error?: Error | null | string, result?: any) => {
    return;
  };
};
