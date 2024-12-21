const { Duration, Stack } = require('aws-cdk-lib/core')
const sns = require('aws-cdk-lib/aws-sns')
const subs = require('aws-cdk-lib/aws-sns-subscriptions')
const sqs = require('aws-cdk-lib/aws-sqs')

module.exports.CdkTestStack = class CdkTestStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'CdkTestQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'CdkTestTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
