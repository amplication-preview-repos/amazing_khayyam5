import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderModuleService } from "./ordermodule.service";
import { CreateOrderInput } from "../orderModule/CreateOrderInput";
import { CreateOrderOutput } from "../orderModule/CreateOrderOutput";

@swagger.ApiTags("orderModules")
@common.Controller("orderModules")
export class OrderModuleController {
  constructor(protected readonly service: OrderModuleService) {}

  @common.Post("/orders")
  @swagger.ApiOkResponse({
    type: CreateOrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOrder(
    @common.Body()
    body: CreateOrderInput
  ): Promise<CreateOrderOutput> {
        return this.service.CreateOrder(body);
      }

  @common.Delete("/orders/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteOrder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteOrder(body);
      }

  @common.Get("/orders")
  @swagger.ApiOkResponse({
    type: CreateOrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetOrders(
    @common.Body()
    body: string
  ): Promise<CreateOrderOutput[]> {
        return this.service.GetOrders(body);
      }

  @common.Put("/orders/:id")
  @swagger.ApiOkResponse({
    type: CreateOrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateOrder(
    @common.Body()
    body: CreateOrderInput
  ): Promise<CreateOrderOutput> {
        return this.service.UpdateOrder(body);
      }
}
