import type {SortType} from "@/models/SortType";

export interface ProductRequest {
  titleQuery?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  categoryId?: number | null;
  sortType?: SortType | null;
  pageNumber: number | null;
  pageSize: number | null;
}
