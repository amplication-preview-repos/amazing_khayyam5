import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CreateOrderItemInput } from "../orderItemModule/CreateOrderItemInput";

@ArgsType()
class CreateOrderInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customerId!: string;

    @Field(() => Date)
    @Type(() => Date)
    orderDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => [CreateOrderItemInput])
    @ApiProperty({
        required: true,
        type: () => [CreateOrderItemInput]
    })
    @Type(() => CreateOrderItemInput)
    orderItems!: CreateOrderItemInput;
}

export { CreateOrderInput as CreateOrderInput };