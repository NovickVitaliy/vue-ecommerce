import axios from "axios";
import type { Product } from "@/models/product";
import type { ProductRequest } from '@/models/product-request'

const API_URL = "https://api.escuelajs.co/api/v1";

export class ApiService {
  /**
   * Fetches all products from the API.
   * @returns Promise<Product[]>
   */
  static async fetchProducts(productRequest: ProductRequest = {}): Promise<Product[]> {
    try {
      // Destructure productRequest with default values
      const {
        titleQuery = "",      // Default to an empty string
        minPrice = 0,         // Default minimum price is 0
        maxPrice = Number.MAX_SAFE_INTEGER, // Default to no max limit
        categoryId,           // Undefined by default if not provided
      } = productRequest;

      // Map the parameters
      const params = {
        query: titleQuery, // Map to "query" parameter
        minPrice,          // Map to "minPrice" parameter
        maxPrice,          // Map to "maxPrice" parameter
        categoryId,        // Map to "categoryId" parameter (will be undefined if not provided)
      };

      // Remove undefined values from params (optional)
      const filteredParams = Object.fromEntries(

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(params).filter(([_, value]) => value !== undefined)
      );

      // Send the request with the query parameters
      const response = await axios.get<Product[]>(`${API_URL}/products`, {
        params: filteredParams,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }

  static async fetchAndSortProducts(
    productRequest: ProductRequest = {},
    sortType: SortType = SortType.BY_ID
  ): Promise<Product[]> {
    try {
      // Fetch products with filters
      let products = await this.fetchProducts(productRequest);

      // Sort products based on the sortType
      switch (sortType) {
        case SortType.BY_TITLE:
          products = products.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case SortType.BY_PRICE:
          products = products.sort((a, b) => a.price - b.price);
          break;
        default:
          // SortType.BY_ID
          products = products.sort((a, b) => a.id - b.id);
      }

      return products;
    } catch (error) {
      console.error("Error fetching and sorting products:", error);
      throw new Error("Failed to fetch sorted products");
    }
  }
}
