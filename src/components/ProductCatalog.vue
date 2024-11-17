<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {Category} from "@/models/category";
import ProductList from "@/components/ProductList.vue";
import {useProductsStore} from "@/store/product-store";
import {computed} from "vue";
import {ApiService} from "@/services/api-service";
import type {ProductRequest} from "@/models/product-request";
const pageSize = 12;

const titleFilter = ref<string | null>(null);
const minPriceFilter = ref<number | null>(null);
const maxPriceFilter = ref<number | null>(null);
const categoryFilter = ref<number | null>(null);
const currentPage = ref<number>(1);

const categories = ref<Category[]>();
const productsStore = useProductsStore();
const products = computed(() => productsStore.products);

ApiService.fetchCategories().then((ctgs) => categories.value = ctgs);

const loadProducts = () => {
  productsStore.getProducts({
    pageSize: pageSize,
    pageNumber: currentPage.value,
    maxPrice: maxPriceFilter.value || Number.MAX_SAFE_INTEGER,
    categoryId: categoryFilter.value,
    minPrice: minPriceFilter.value || 0,
    titleQuery: titleFilter.value
  });
};

const goToPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
  loadProducts();
};

watch([titleFilter, minPriceFilter, maxPriceFilter, categoryFilter], () => {
  currentPage.value = 1;
  loadProducts();
});

productsStore.getProducts({
  pageNumber: 1,
  pageSize: pageSize
});

</script>

<template>
  <div class="d-flex align-items-center p-3">
    <div class="d-flex me-3">
      <label for="title-filter" class="text-center fs-5 me-1">Title</label>
      <input id="title-filter" class="form-control" type="text" v-model="titleFilter">
    </div>

    <div class="d-flex me-3">
      <label for="min-price-filter" class="text-center fs-5 me-1 text-nowrap">Min Price</label>
      <input id="min-price-filter" class="form-control" type="number" v-model="minPriceFilter">
    </div>

    <div class="d-flex me-3">
      <label for="max-price-filter" class="text-center me-1 fs-5 text-nowrap">Max Price</label>
      <input id="max-price-filter" class="form-control" type="number" v-model="maxPriceFilter">
    </div>

    <div class="d-flex me-3">
      <label for="category-filter" class="text-center me-1 fs-5">Category</label>
      <select v-model="categoryFilter" class="form-select" id="category-filter">
        <option v-for="ctg in categories" :value="ctg.id">{{ ctg.name }}</option>
        <option :value="null">None</option>
      </select>
    </div>
  </div>
  <ProductList :products="products"></ProductList>
  <div class="d-flex justify-content-center gap-1 align-items-center">
    <button @click="() => goToPage(currentPage - 1)" class="btn w-10 pagination-button"
            :class="currentPage === 1 ? 'btn-secondary' : 'btn-primary'"
            :disabled="currentPage === 1">Previous
    </button>
    <button :disabled="products.length < pageSize" @click="() => goToPage(currentPage + 1)"
            :class="products.length < pageSize ? 'btn-secondary' : 'btn-primary'"
            class="btn btn-primary pagination-button">Next
    </button>
  </div>
</template>

<style scoped>
.pagination-button {
  width: 100px;
}
</style>
