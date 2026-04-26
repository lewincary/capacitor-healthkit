import { WebPlugin } from '@capacitor/core';
import type { CapacitorHealthkitPlugin, AuthorizationQueryOptions, SingleQueryOptions, MultipleQueryOptions, EditionQuery, MultipleEditionQuery, StatisticsQueryOptions, StatisticsQueryOutput, ActivitySummaryQueryOptions, ActivitySummaryQueryOutput, SleepAggregationQueryOptions, SleepAggregationQueryOutput } from './definitions';
export declare class CapacitorHealthkitWeb extends WebPlugin implements CapacitorHealthkitPlugin {
    requestAuthorization(_authOptions: AuthorizationQueryOptions): Promise<void>;
    queryHKitSampleType(_queryOptions: SingleQueryOptions): Promise<any>;
    isAvailable(): Promise<void>;
    multipleQueryHKitSampleType(_queryOptions: MultipleQueryOptions): Promise<any>;
    isEditionAuthorized(_queryOptions: EditionQuery): Promise<void>;
    multipleIsEditionAuthorized(_queryOptions: MultipleEditionQuery): Promise<void>;
    queryHKitStatistics(_options: StatisticsQueryOptions): Promise<StatisticsQueryOutput>;
    queryActivitySummary(_options: ActivitySummaryQueryOptions): Promise<ActivitySummaryQueryOutput>;
    querySleepAggregatedByNight(_options: SleepAggregationQueryOptions): Promise<SleepAggregationQueryOutput>;
}
