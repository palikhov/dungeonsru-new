import { createApp } from 'vue'

import App from './src/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Posts from './src/views/Posts.vue'
import Books from './src/views/Books.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Posts },
    { path: '/books', component: Books },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
