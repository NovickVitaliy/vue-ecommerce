<template>
  <div class="product-card">
    <img :src="product.images[0]" alt="Product Image" class="product-card__image" />
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__price">$ {{ product.price.toFixed(2) }}</p>
    <div class="d-flex w-100">
      <button></button>
      <button></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@/models/product";

defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}

.product-card__image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-card__title {
  font-size: 16px;
  margin: 10px 0;
}

.product-card__price {
  font-size: 14px;
  color: #555;
}
</style>
