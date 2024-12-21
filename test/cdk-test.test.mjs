import { App } from 'aws-cdk-lib/core'
import { Template } from 'aws-cdk-lib/assertions';
import { CdkTestStack } from '../lib/cdk-test-stack.mjs'

test('SQS Queue and SNS Topic Created', () => {
  const app = new App();
  // WHEN
  const stack = new CdkTestStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
