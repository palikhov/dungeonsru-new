<script lang="ts">
import {defineComponent} from 'vue'
import {mande} from 'mande'

import type {BackendResponse} from '../interfaces'
import Post from '../components/Post.vue'

interface PostData {
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
    const response = await api.get<BackendResponse<PostData>>('/items/posts', {
      query: {
        sort: '-date_created',
      },
    })
    this.posts = response.data
  },
  data() {
    return {
      posts: [] as PostData[],
    }
  },
})
</script>

<template>
  <h1 class="page-title">Блог</h1>
  <Post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :content="post.content"
  />
</template>
