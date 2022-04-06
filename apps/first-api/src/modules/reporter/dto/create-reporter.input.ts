import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
@InputType()
export class CreateReporterInput {
    @Field(() => Number)
    topicId: number;
    @Field(() => String)
    asal: string;
    @Field(() => String)
    name: string;
}