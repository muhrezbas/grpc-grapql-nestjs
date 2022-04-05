import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
@InputType()
export class GetReporterInput {
    @Field(() => Number)
    topicId: number;
}