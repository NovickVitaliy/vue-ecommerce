<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__message">Page does not exist.</p>
    <RouterLink to="/" class="not-found__link">Go back to Home</RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
}

.not-found__title {
  font-size: 6rem;
  color: #dc3545;
}

.not-found__message {
  font-size: 1.5rem;
  margin-top: 20px;
  color: #6c757d;
}

.not-found__link {
  margin-top: 30px;
  font-size: 1.25rem;
  color: #007bff;
  text-decoration: none;
}

.not-found__link:hover {
  text-decoration: underline;
}
</style>
