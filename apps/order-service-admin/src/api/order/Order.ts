import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  customerId: string | null;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  status: string | null;
  updatedAt: Date;
};
