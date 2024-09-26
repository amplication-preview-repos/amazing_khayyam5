import * as graphql from "@nestjs/graphql";
import { OrderItemModuleService } from "./orderitemmodule.service";

export class OrderItemModuleResolver {
  constructor(protected readonly service: OrderItemModuleService) {}
}
