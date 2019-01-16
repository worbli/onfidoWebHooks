#Onfido Webhooks via Amazon Lambda  
An easy to deploy via Claudia express app in node.  

##Prerequisites  
- Node.js  
- External MongoDB server with user that has remote access  
- AWS CLI preconfigured  
   `npm install -g aws-cli`  
   `aws configure`  
- Claudia.js  
   `npm install -g claudia`

##Dev build process
`$ npm install`  
`$ claudia generate-serverless-express-proxy --express-module api`
`$ claudia create --handler lambda.handler --deploy-proxy-api --region us-west-1`  
A new Lambda function will be created under the name "onfido-webhooks-lambda" under the us-west-1 region.

##Environment variables  
Environment variables are configured from the AWS console under the Lambda function section.  
Locate your Lambda function and add the following environment variables:  

   - CORS_WHITELIST  
   - ONFIDO\_WEBHOOK\_SECRET  
   - DB_HOST  
   - DB_NAME  
   - DB_USER  
   - DB_PASS

##Making changes  
To make updates to your repository simply edit the file locally and run:  
`$ claudia update`  

The files will automatically be deployed to your AWS lambda function.
