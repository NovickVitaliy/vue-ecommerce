<script setup lang="ts">

</script>

import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="page-container">
    <!-- компонент NavbarComponent -->
    <NavbarComponent />

    <!-- Основний контент сторінки -->
    <div class="content">
      <RouterView></RouterView>
    </div>

    <!-- компонент FooterComponent -->
    <FooterComponent/>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Заповнює всю висоту екрана */
}

.content {
  flex: 1; /* Розтягує основний контент, щоб футер опинився внизу */
}
</style>

