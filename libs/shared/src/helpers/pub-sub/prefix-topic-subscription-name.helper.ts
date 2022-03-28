import { machineIdSync } from 'node-machine-id';
import { Logger } from '@nestjs/common';
import { NODE_ENVIRONMENT } from 'lib/shared/constants';
export const prefixTopicSubscriptionName = (name: string): string => {
  const prefixLocalDevMachineId = machineIdSync(true);

  let envNameSlug = '';

  if (process.env.CI_MERGE_REQUEST_IID) {
    Logger.log(process.env.CI_MERGE_REQUEST_IID, 'CI_MERGE_REQUEST_IID');
    envNameSlug = `review-${process.env.CI_MERGE_REQUEST_IID}`;
  } else if (process.env.CI_ENVIRONMENT_SLUG) {
    Logger.log(process.env.CI_ENVIRONMENT_SLUG, 'CI_ENVIRONMENT_SLUG');
    envNameSlug = process.env.CI_ENVIRONMENT_SLUG;
  } else {
    envNameSlug = `dev-${prefixLocalDevMachineId}`;
  }

  if (envNameSlug && envNameSlug !== NODE_ENVIRONMENT.PRODUCTION) {
    return `${envNameSlug}-${name}`;
  }
  return name;
};
