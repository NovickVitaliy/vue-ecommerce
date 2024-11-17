import type { Product } from "@/models/product";
import { ref } from "vue";
import type { ProductRequest } from '@/models/product-request'
import { defineStore } from 'pinia'
import type { Product } from '@/models/product'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  //TODO: change to retrieving from products from api
  const products = ref<Product[]>([])

  //TODO: change from any to request model
  function getProducts(productRequest: ProductRequest) {
    // actual request to api
  }

  return { products, getProducts }
})
