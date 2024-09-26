import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InventoryManagementModuleService } from "./inventorymanagementmodule.service";

@swagger.ApiTags("inventoryManagementModules")
@common.Controller("inventoryManagementModules")
export class InventoryManagementModuleController {
  constructor(protected readonly service: InventoryManagementModuleService) {}

  @common.Post("/consume-order-events")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeOrderEvents(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeOrderEvents(body);
      }
}
