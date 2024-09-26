import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderItemModuleService } from "./orderitemmodule.service";

@swagger.ApiTags("orderItemModules")
@common.Controller("orderItemModules")
export class OrderItemModuleController {
  constructor(protected readonly service: OrderItemModuleService) {}
}
