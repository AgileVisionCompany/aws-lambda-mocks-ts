# AWS Lambda Mocks (TypeScript)
This is a small and simple library which can help you with AWS Lambda testing. Right now we are in active development stage.

List of currently available mocks: 
1. Events:
    - API Gateway (Event, Context, Callback)
2. Requests:
    - AWS Service (Request + Response)
    
 ## Events Mock API
 ### API Gateway (Events.ApiGateway)
 ------
 #### mockApiGatewayEvent(
 #### path: string,
 #### body?: string | object,
 #### method?: string,
 #### pathParameters?: { [name: string]: string },
 #### headers?: { [name: string]: string },
 #### queryStringParameters?: { [name: string]: string },
 #### resourcePath?: string,
 #### stage?: string,
 #### requestContext?: APIGatewayEventRequestContext
 #### ) : APIGatewayProxyEvent

 Returns mocked API Gateway event for AWS Lambda function. Should be passed as the first argument to an AWS Lambda handler.

  ```typescript
AwsMock.Events.ApiGateway.mockApiGatewayEvent("http://example.com/example", { id: 0 }, "POST", { proxy: "proxy" }, { authorization: TEST_VALID_TOKEN }, { userId: "TEST_ID" } );
  ```
  
 #### mockLambdaContext(done?: (error?: Error, result?: any) => void, fail?: (err: Error | string) => void) : Context

 Returns mocked API Gateway context for AWS Lambda function. Should be passed as the second argument to an AWS Lambda handler.

  ```typescript
  AwsMock.Events.ApiGateway.mockLambdaContext((err, result) => {}, (err) => {});
  ```
 #### mockCallback() : Callback

 Returns mocked API Gateway callback for AWS Lambda function. Should be passed as the third argument to an AWS Lambda handler.

  ```typescript
  AwsMock.Events.ApiGateway.mockCallback();
  ```
 
 ## Requsts Mock API
 ### AWS Service (Requests)
 ------
 #### mockAwsServiceRequest(response: CallbackResponse, callback: (err?: Error, data?: any) => void, service?: AWS.Service, operation?: string) : Callback

 Mock requests to any AWS service. Useful when you need to tests your app with bad and ok responses from AWS.

  ```typescript
  AwsMock.Requests.mockAwsServiceRequest({
    data: {
      success: "true"
    }
  }, (err, data) => {});
  ```
