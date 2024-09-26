import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CreateOrderItemInput } from "../orderItemModule/CreateOrderItemInput";

@ObjectType("CreateOrderOutputObject")
class CreateOrderOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

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

export { CreateOrderOutput as CreateOrderOutput };