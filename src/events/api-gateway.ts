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
    body: !!body
      ? body instanceof String
        ? body
        : JSON.stringify(body)
      : null,
    headers: !!headers ? Object.assign(defaultHeaders, headers) : headers,
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
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-us",
  "CloudFront-Forwarded-Proto": "https",
  "CloudFront-Is-Desktop-Viewer": "true",
  "CloudFront-Is-Mobile-Viewer": "false",
  "CloudFront-Is-SmartTV-Viewer": "false",
  "CloudFront-Is-Tablet-Viewer": "false",
  "CloudFront-Viewer-Country": "US",
  Cookie:
    "__gads=ID=d51d609e5753330d:T=1443694116:S=ALNI_MbjWKzLwdEpWZ5wR5WXRI2dtjIpHw; __qca=P0-179798513-1443694132017; _ga=GA1.2.344061584.1441769647",
  Host: "xxx.execute-api.us-east-1.amazonaws.com",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/601.6.17 (KHTML, like Gecko) Version/9.1.1 Safari/601.6.17",
  Via: "1.1 c8a5bb0e20655459eaam174e5c41443b.cloudfront.net (CloudFront)",
  "X-Amz-Cf-Id": "z7Ds7oXaY8hgUn7lcedZjoIoxyvnzF6ycVzBdQmhn3QnOPEjJz4BrQ==",
  "X-Forwarded-For": "221.24.103.21, 54.242.148.216",
  "X-Forwarded-Port": "443",
  "X-Forwarded-Proto": "https"
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
