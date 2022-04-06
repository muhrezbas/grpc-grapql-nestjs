import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
@InputType()
export class GetReporterSingleInput {
    @Field(() => String)
    id: string;
}