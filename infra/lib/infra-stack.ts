import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps, RemovalPolicy, aws_s3 as s3, aws_s3_deployment as s3Deployment, aws_cloudfront as cloudFront, aws_cloudfront_origins as origins } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda_node from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
export class InfraStack extends cdk.Stack {
  public readonly api: apigateway.RestApi;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
     // define lambdaHandler resource
    const link = new lambda_node.NodejsFunction(this, "LinkHandler", {
      entry: 'api/link.ts',   
      handler: 'lambdaHandler'
    })
 
    // s3
    const myBuck = new s3.Bucket(this, "CdkBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      removalPolicy: RemovalPolicy.DESTROY
    });

    const CloudFrontWebDistribution = new cloudFront.CloudFrontWebDistribution(
      this,
      "SignUpWebDistribution",
      {
        originConfigs:[
          {
            behaviors: [
            {
              isDefaultBehavior: true,              
            },            
            ]
          },
        ]
      }
    )


    // creating the api resource
    // this.api = new apigateway.RestApi(this, "LinkApi",{
    //   restApiName: "sign-up-link-api",
    //   description: "Sign up link API",
    //   binaryMediaTypes: ["*/*"],
    //   minimumCompressionSize: 0
    // })
    // // give a value to the apiResource
    // const apiResource = this.api.root.addResource("api");
    
    // const linkResource = apiResource.addResource("link");    
    
    // const getLinkApi = new apigateway.LambdaIntegration(link,{
    //   requestTemplates: {"application/json": '{"statusCode: "200"}'}
    // });
    
    // linkResource.addMethod("GET", getLinkApi);

    // Deployment
    new s3Deployment.BucketDeployment(this, "CdkDeployBucket", {
      sources: [s3Deployment.Source.asset("../frontend/out")],
      destinationBucket: myBuck
    });
    

    //CF = CDN of AWS
    // Handles buckets whether or not they are configured for website hosting.
    new cloudFront.CloudFrontWebDistribution(this, 'CfDistribution', {
      originConfigs: [
        {
          s3OriginSource: { s3BucketSource: myBuck },
          behaviors: [{ isDefaultBehavior: true }]
        }],
        enabled: true,
        defaultRootObject: "index.html",
        
    });
  }
}