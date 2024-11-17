import axios from "axios";
import type { Product } from "@/models/product";
import type { ProductRequest } from '@/models/product-request'

const API_URL = "https://api.escuelajs.co/api/v1";

export class ApiService {
  /**
   * Fetches all products from the API.
   * @returns Promise<Product[]>
   */
  static async fetchProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }

  static async getProducts(productsRequest: ProductRequest): Promise<Product[]> {
    let filteredProducts = (await this.fetchProducts());

    // Filter by title if provided
    if (productsRequest.titleQuery) {
      filteredProducts = filteredProducts
        .filter(product => product.title.toLowerCase().includes(productsRequest.titleQuery ?? "".toLowerCase())) // filter by title
    }

    // Filter by min price if provided
    if (productsRequest.minPrice) {
      filteredProducts = filteredProducts
        .filter(product => product.price >= (productsRequest.minPrice ?? 0)); // filter by min price
    }

    // Filter by max price if provided
    if (productsRequest.maxPrice) {
      filteredProducts = filteredProducts
        .filter(product => product.price >= (productsRequest.maxPrice ?? product.price + 1)); // filter by max price (costyl to remove red underline)
    }

    // Filter by category ID if provided
    if (productsRequest.categoryId) {
      filteredProducts = filteredProducts.filter(
        product => product.category?.id === productsRequest.categoryId // filter by category
      );
    }

    return filteredProducts;
  }
}
