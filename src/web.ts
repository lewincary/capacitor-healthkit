/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type {
  CapacitorHealthkitPlugin,
  AuthorizationQueryOptions,
  SingleQueryOptions,
  MultipleQueryOptions,
  EditionQuery,
  MultipleEditionQuery,
  StatisticsQueryOptions,
  StatisticsQueryOutput,
  ActivitySummaryQueryOptions,
  ActivitySummaryQueryOutput,
  SleepAggregationQueryOptions,
  SleepAggregationQueryOutput,
} from './definitions';

export class CapacitorHealthkitWeb
  extends WebPlugin
  implements CapacitorHealthkitPlugin {
  async requestAuthorization(
    _authOptions: AuthorizationQueryOptions,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async queryHKitSampleType(_queryOptions: SingleQueryOptions): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  async isAvailable(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async multipleQueryHKitSampleType(
    _queryOptions: MultipleQueryOptions,
  ): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  async isEditionAuthorized(_queryOptions: EditionQuery): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async multipleIsEditionAuthorized(
    _queryOptions: MultipleEditionQuery,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async queryHKitStatistics(
    _options: StatisticsQueryOptions,
  ): Promise<StatisticsQueryOutput> {
    throw this.unimplemented('Not implemented on web.');
  }

  async queryActivitySummary(
    _options: ActivitySummaryQueryOptions,
  ): Promise<ActivitySummaryQueryOutput> {
    throw this.unimplemented('Not implemented on web.');
  }

  async querySleepAggregatedByNight(
    _options: SleepAggregationQueryOptions,
  ): Promise<SleepAggregationQueryOutput> {
    throw this.unimplemented('Not implemented on web.');
  }
}
