import axios from "axios";
import type {Product} from "@/models/product";
import type {ProductRequest} from '@/models/product-request'
import {SortType} from "@/models/SortType";
import type {Category} from "@/models/category";

const API_URL = "https://api.escuelajs.co/api/v1";

export class ApiService {
    static async fetchProducts(productRequest: ProductRequest): Promise<Product[]> {
        try {
            const {
                titleQuery = "",
                minPrice = 0,
                maxPrice = Number.MAX_SAFE_INTEGER,
                categoryId,
                pageSize = 10,
                pageNumber = 1
            } = productRequest;



            const params = {
                title: titleQuery,
                price_min: minPrice,
                price_max: maxPrice,
                categoryId,
                offset: (productRequest.pageNumber - 1) * productRequest.pageSize,
                limit: productRequest.pageSize
            };

            const filteredParams = Object.fromEntries(
                Object.entries(params).filter(([_, value]) => value !== undefined)
            );

            const response = await axios.get<Product[]>(`${API_URL}/products`, {
                params: filteredParams,
            });
            console.log("Products retrieved");
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Failed to fetch products");
        }
    }

    static async fetchAndSortProducts(
        productRequest: ProductRequest,
        sortType: SortType = SortType.BY_ID
    ): Promise<Product[]> {
        try {
            let products = await this.fetchProducts(productRequest);

            switch (sortType) {
                case SortType.BY_TITLE:
                    products = products.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case SortType.BY_PRICE:
                    products = products.sort((a, b) => a.price - b.price);
                    break;
                default:
                    products = products.sort((a, b) => a.id - b.id);
            }

            return products;
        } catch (error) {
            console.error("Error fetching and sorting products:", error);
            throw new Error("Failed to fetch sorted products");
        }
    }

    static async fetchCategories(): Promise<Category[]> {
        const response = await axios.get<Category[]>(`${API_URL}/categories`)
        return response.data;
    }
}
