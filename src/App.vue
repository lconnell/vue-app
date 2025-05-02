<script setup>
import Login from './components/Login.vue'
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style scoped>
/* Minimal styling for clean login layout */
:deep(.v-application) {
  min-height: 100vh;
  background: #f6f7fb;
}

</style>
