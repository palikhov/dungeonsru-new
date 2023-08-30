<script lang="ts">
import {defineComponent} from 'vue'
import {mande} from 'mande'

import type {BackendResponse} from '../interfaces'
import Post from '../components/Post.vue'

interface Post {
  id: number
  title: string
  content: string
}

export default defineComponent({
  components: {
    Post,
  },
  async mounted() {
    const api = mande('api')
    const response = await api.get<BackendResponse<Post>>('/items/posts', {
      query: {
        sort: '-date_created'
      }
    })
    this.posts = response.data
  },
  data() {
    return {
      posts: [] as Post[],
    }
  },
})
</script>

<template>
  <h1 class="text-slate-800 font-sans font-semibold text-5xl mb-8">Blog</h1>
  <Post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :content="post.content"
  />
</template>
