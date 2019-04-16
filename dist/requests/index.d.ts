import * as AWS from "aws-sdk";
export declare const mockAwsServiceRequest: (response: CallbackResponse, callback: (err?: Error, data?: any) => void, service?: AWS.Service, operation?: string) => AWS.Request<any, AWS.AWSError>;
export declare class CallbackResponse {
    constructor(err?: Error, data?: any);
    err?: Error;
    data?: any;
}
