<script setup >
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <header class="bg-gray-100 py-4 w-full text-gray-900 text-lg">
    <div class="container mx-auto px-4">Awesome website</div>
  </header>

  <Suspense>
    <HomePage />
  </Suspense>
</template>
