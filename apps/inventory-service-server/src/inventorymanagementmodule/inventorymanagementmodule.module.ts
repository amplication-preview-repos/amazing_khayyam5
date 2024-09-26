import { Module } from "@nestjs/common";
import { InventoryManagementModuleService } from "./inventorymanagementmodule.service";
import { InventoryManagementModuleController } from "./inventorymanagementmodule.controller";
import { InventoryManagementModuleResolver } from "./inventorymanagementmodule.resolver";

@Module({
  controllers: [InventoryManagementModuleController],
  providers: [InventoryManagementModuleService, InventoryManagementModuleResolver],
  exports: [InventoryManagementModuleService],
})
export class InventoryManagementModuleModule {}
