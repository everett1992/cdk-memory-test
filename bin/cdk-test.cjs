#!/usr/bin/env node
const cdk = require('aws-cdk-lib/core');
const { CdkTestStack } = require('../lib/cdk-test-stack.cjs');

const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');
