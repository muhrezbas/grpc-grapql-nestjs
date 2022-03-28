import { Field, ObjectType, PartialType } from '@nestjs/graphql';
import { News } from 'lib/model/entities';
import { PaginationResponse } from 'lib/shared/dto';

@ObjectType()
export class NewsResponse extends PartialType(PaginationResponse) {
  @Field(() => [News], { nullable: false })
  data?: News[];
}
