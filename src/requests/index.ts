import * as AWS from "aws-sdk"
import { Request } from "aws-sdk";

export const mockAwsServiceRequest = (
    response: CallbackResponse,
    callback: (err?: Error, data?: any) => void,
    service?: AWS.Service,
    operation?: string
  ) : Request<any, AWS.AWSError> => {
        callback(response.err, response.data);
        return new Request<any, AWS.AWSError>(!!service ? service : new AWS.Service(), !!operation ? operation : "test_operation");
  };

export class CallbackResponse{
    constructor(err?: Error, data?: any) {
        this.err = err;
        this.data = data;
    }
    err?: Error
    data?: any
}