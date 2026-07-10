import type { Order } from "../interfaces/Order";

export const addOrder = (draft: Order[], order: Order) => {

    draft.unshift(order);

};
