import { ReporterResponse } from './reporter-response';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetReporterResponse {
  @Field(() => [ReporterResponse], { nullable: true })
  reporters: ReporterResponse[];
}
