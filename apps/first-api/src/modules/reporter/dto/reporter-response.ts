import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReporterResponse {
  @Field(() => String )
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  asal: string;
  @Field(() => Number)
  topicId: number;
}
