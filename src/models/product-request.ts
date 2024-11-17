import type {SortType} from "@/models/SortType";

export interface ProductRequest {
  titleQuery?: string;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
  sortType?: SortType;
  pageNumber: number;
  pageSize: number;
}
