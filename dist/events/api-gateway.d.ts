import { APIGatewayEventRequestContext, APIGatewayProxyEvent, Callback, Context } from "aws-lambda/index";
export declare const mockApiGatewayEvent: (path: string, body?: string | object, method?: string, pathParameters?: {
    [name: string]: string;
}, headers?: {
    [name: string]: string;
}, queryStringParameters?: {
    [name: string]: string;
}, resourcePath?: string, stage?: string, requestContext?: APIGatewayEventRequestContext) => APIGatewayProxyEvent;
export declare const mockLambdaContext: (done?: (error?: Error, result?: any) => void, fail?: (err: string | Error) => void) => Context;
export declare const mockCallback: () => Callback<any>;
