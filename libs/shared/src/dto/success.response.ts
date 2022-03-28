import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SuccessResponse {
  @Field({ nullable: false })
  status: boolean;
}
