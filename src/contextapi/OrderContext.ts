import { createContext } from "react";
import type { Order } from "../interfaces/Order";

export interface OrderContextType {
  orders: Order[];

  addOrder: (order: Order) => void;
}

export const OrderContext = createContext<OrderContextType>(null!);

