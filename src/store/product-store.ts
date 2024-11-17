import type { Product } from "@/models/product";
import type { ProductRequest } from '@/models/product-request'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {ApiService} from "@/services/api-service";

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  function getProducts(productRequest: ProductRequest) {
    ApiService.fetchAndSortProducts(productRequest, productRequest.sortType)
        .then(result => {
          products.value = result;
            console.log("value set in store");
        });
  }

  return { products, getProducts }
})
