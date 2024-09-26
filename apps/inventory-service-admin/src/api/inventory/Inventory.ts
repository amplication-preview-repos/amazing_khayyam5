export type Inventory = {
  createdAt: Date;
  id: string;
  productId: string | null;
  quantity: number | null;
  updatedAt: Date;
};
