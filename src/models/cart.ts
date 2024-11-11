import type {CartProduct} from "@/models/cart-product";

export interface Cart {
  products: CartProduct[];
  totalItems: number;
}
