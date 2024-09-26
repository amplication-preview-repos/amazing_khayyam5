import { InputType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@InputType("CreateOrderItemInputInput")
@ObjectType("CreateOrderItemInputObject")
class CreateOrderItemInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    productId!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    quantity!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    price!: number;
}

export { CreateOrderItemInput as CreateOrderItemInput };