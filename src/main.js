import {createApp} from 'vue'
import App from './App.vue'
import TheHero from "./components/TheHero.vue";

import './assets/main.css'
import {apiPlugin, StoryblokVue} from "@storyblok/vue";

const app = createApp(App)

app.use(StoryblokVue, {
    accessToken: 'wQ4XHtRQH24CrkvJlQdvRQtt',
    use: [apiPlugin]
})

// eslint-disable-next-line vue/multi-word-component-names
app.component('Hero', TheHero)
app.mount('#app')
