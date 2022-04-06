import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
@InputType()
export class EditReporterInput {
    @Field(() => String)
    id: string;
    @Field(() => Number)
    topicId: number;
    @Field(() => String)
    asal: string;
    @Field(() => String)
    name: string;
}