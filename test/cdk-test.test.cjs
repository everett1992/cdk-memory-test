const cdk = require('aws-cdk-lib/core');
const { Template } = require('aws-cdk-lib/assertions')
const CdkTest = require('../lib/cdk-test-stack.cjs')

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkTest.CdkTestStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
