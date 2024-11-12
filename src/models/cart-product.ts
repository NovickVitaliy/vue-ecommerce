import type { Product } from '@/models/product'

export interface CartProduct {
  product: Product
  quantity: number
}
