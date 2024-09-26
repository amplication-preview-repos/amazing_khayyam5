import { Injectable } from "@nestjs/common";
import { CreateOrderInput } from "../orderModule/CreateOrderInput";
import { CreateOrderOutput } from "../orderModule/CreateOrderOutput";

@Injectable()
export class OrderModuleService {
  constructor() {}
  async CreateOrder(args: CreateOrderInput): Promise<CreateOrderOutput> {
    throw new Error("Not implemented");
  }
  async DeleteOrder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetOrders(args: string): Promise<CreateOrderOutput[]> {
    throw new Error("Not implemented");
  }
  async UpdateOrder(args: CreateOrderInput): Promise<CreateOrderOutput> {
    throw new Error("Not implemented");
  }
}
