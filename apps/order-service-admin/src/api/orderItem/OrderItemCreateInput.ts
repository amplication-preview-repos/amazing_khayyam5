import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  productId?: string | null;
  quantity?: number | null;
};
