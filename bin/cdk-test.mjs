#!/usr/bin/env node
import { App } from 'aws-cdk-lib/core'
import { CdkTestStack } from '../lib/cdk-test-stack.mjs';

const app = new App();
new CdkTestStack(app, 'CdkTestStack');
