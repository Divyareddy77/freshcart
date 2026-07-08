import { createContext } from "react";
import type { CartItem, Product } from "../interfaces/Products";

export interface CartContextType {
  cart: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>(null!);