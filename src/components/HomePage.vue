<script setup>
import {inject, onMounted, reactive} from 'vue'
import {useStoryblokBridge} from '@storyblok/vue'

const storyblokApi = inject('storyblokApi')
const { data } = await storyblokApi.get('cdn/stories/home', {
  //version: 'draft'
})

const state = reactive({story: data.story})

onMounted(() => {
  useStoryblokBridge(state.story.id, (story) => (state.story = story))
})
</script>

<template>
  <div>
    <component v-for="blok in state.story.content.body" :is="blok.component" :blok="blok" :key="blok._uid"></component>
  </div>
</template>
