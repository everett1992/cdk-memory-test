import { Duration, Stack } from 'aws-cdk-lib/core'
import { Topic } from 'aws-cdk-lib/aws-sns'
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions'
import { Queue } from 'aws-cdk-lib/aws-sqs'

export class CdkTestStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new Queue(this, 'CdkTestQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new Topic(this, 'CdkTestTopic');

    topic.addSubscription(new SqsSubscription(queue));
  }
}
