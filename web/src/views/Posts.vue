<script lang="ts">
import { defineComponent } from 'vue'
import Post from '../components/Post.vue'

export default defineComponent({
  components: {
    Post,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'My second post',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam ultricies, nunc ipsum tincidunt nunc, vitae aliquet nisl nunc sed nunc. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
        },
        {
          id: 2,
          title: 'My first post',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam ultricies, nunc ipsum tincidunt nunc, vitae aliquet nisl nunc sed nunc. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
        },
      ],
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
