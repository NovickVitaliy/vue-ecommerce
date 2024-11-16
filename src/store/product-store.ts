import { defineStore } from "pinia";
import type { Product } from "@/models/product";
import { ref } from "vue";
import type { ProductsRequest } from '@/models/product-request'
// import { ApiService } from '@/services/api-service'

// example of fetching products from ApiService
/*
const products = ref<Product[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);

const fetchProducts = async (): Promise<void> => {
  isLoading.value = true;
  error.value = null;
  try {
    products.value = await ApiService.fetchProducts();
  } catch (err) {
    error.value = "Failed to fetch products.";
  } finally {
    isLoading.value = false;
  }
};
*/

export const useProductsStore = defineStore('products', () => {
  //TODO: change to retrieving from products from api
  const products = ref<Product[]>([]);

  //TODO: change from any to request model
  function getProducts(productsRequest: ProductsRequest) {
    // actual request to api
  }

  return {products, getProducts};
})
