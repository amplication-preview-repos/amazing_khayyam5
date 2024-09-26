import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  productId?: string | null;
  quantity?: number | null;
};
