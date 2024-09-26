import { Injectable } from "@nestjs/common";

@Injectable()
export class InventoryManagementModuleService {
  constructor() {}
  async ConsumeOrderEvents(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
