import * as graphql from "@nestjs/graphql";
import { InventoryManagementModuleService } from "./inventorymanagementmodule.service";

export class InventoryManagementModuleResolver {
  constructor(protected readonly service: InventoryManagementModuleService) {}

  @graphql.Mutation(() => String)
  async ConsumeOrderEvents(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ConsumeOrderEvents(args);
  }
}
