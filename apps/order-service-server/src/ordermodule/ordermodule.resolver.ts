import * as graphql from "@nestjs/graphql";
import { CreateOrderInput } from "../orderModule/CreateOrderInput";
import { CreateOrderOutput } from "../orderModule/CreateOrderOutput";
import { OrderModuleService } from "./ordermodule.service";

export class OrderModuleResolver {
  constructor(protected readonly service: OrderModuleService) {}

  @graphql.Mutation(() => CreateOrderOutput)
  async CreateOrder(
    @graphql.Args()
    args: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    return this.service.CreateOrder(args);
  }

  @graphql.Mutation(() => String)
  async DeleteOrder(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeleteOrder(args);
  }

  @graphql.Query(() => [CreateOrderOutput])
  async GetOrders(
    @graphql.Args("args")
    args: string
  ): Promise<CreateOrderOutput[]> {
    return this.service.GetOrders(args);
  }

  @graphql.Mutation(() => CreateOrderOutput)
  async UpdateOrder(
    @graphql.Args()
    args: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    return this.service.UpdateOrder(args);
  }
}
