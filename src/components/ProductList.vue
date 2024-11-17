<script setup lang="ts">
import ProductComponent from "@/components/ProductComponent.vue";
import type {Product} from "@/models/product";

const props = defineProps<{
  products: Product[]
}>();

</script>

<template>
  <div class="app">
    <h1>Products</h1>
    <div class="products-grid">
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
