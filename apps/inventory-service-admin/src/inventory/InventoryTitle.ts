import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "productId";

export const InventoryTitle = (record: TInventory): string => {
  return record.productId?.toString() || String(record.id);
};
