import {createApp} from 'vue'
import {defaults} from 'mande'

import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Posts from './views/Posts.vue'
import Books from './views/Books.vue'
import {createPinia} from 'pinia'

const token = __DIRECTUS_TOKEN__
defaults.headers.Authorization = `Bearer ${token}`

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Posts},
    {path: '/books', component: Books},
  ],
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
