<script setup>
const props = defineProps({
  blok: Object,
});
</script>

<template>
  <div
      v-editable="blok"
      class="bg-cover"
      :style="{ 'background-image': `url(${blok.image.filename})` }"
  >
    <div class="h-72 container mx-auto px-4 flex flex-col justify-center">
      <h1
          class="text-4xl font-semibold text-white"
          style="text-shadow: 1px 1px 4px #000004"
      >
        {{ blok.headline }}
      </h1>
      <div class="mt-12">
        <a
            :href="blok.button_link"
            class="bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded"
        >
          {{ blok.button_text }}
        </a>
      </div>
    </div>
  </div>
</template>
