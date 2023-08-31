<script lang="ts">
import {defineComponent} from 'vue'
import {marked} from 'marked'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    htmlContent() {
      return marked.parse(this.content)
    },
  },
})
</script>

<template>
  <div class="mb-12 blogpost">
    <h2 class="text-slate-800 font-semibold text-3xl mb-2">{{ title }}</h2>
    <div v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.blogpost p {
  @apply font-light;
}
</style>
