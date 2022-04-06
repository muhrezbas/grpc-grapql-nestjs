import { ReporterResponse } from './reporter-response';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetReporterSingleResponse {
  @Field(() => ReporterResponse, { nullable: true })
  reporter: ReporterResponse;
}
