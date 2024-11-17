<script setup lang="ts">
import { useProductsStore } from "@/store/product-store";
import ProductComponent from "@/components/ProductComponent.vue";
import { onMounted } from "vue";

// Use the products store
const productsStore = useProductsStore();
const {fetchProducts, products, isLoading, error } = productsStore;

// Fetch products when the component is mounted
onMounted(async () => {
  await fetchProducts();
});
</script>

<template>
  <div class="app">
    <h1>Products</h1>
    <!-- Display loading state -->
    <div v-if="isLoading">Loading products...</div>

    <!-- Display error message if there was an error -->
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else-if="products.length === 0" class="error">No Products found</div>

    <!-- Display products if available -->
    <div v-else class="products-grid">
      <ProductComponent v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.error {
  color: red;
  font-size: 18px;
}
</style>
