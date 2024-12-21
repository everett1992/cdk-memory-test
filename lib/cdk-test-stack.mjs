import { Duration, Stack } from 'aws-cdk-lib'
import * as sns from 'aws-cdk-lib/aws-sns'
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions'
import * as sqs from 'aws-cdk-lib/aws-sqs'

export class CdkTestStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'CdkTestQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'CdkTestTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
