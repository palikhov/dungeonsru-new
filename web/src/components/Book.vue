<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array<String>,
      default: [],
    },
    finished: {
      type: Boolean,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    downloadLink: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="bg-slate-200 flex mt-6 border-slate-400 border-l-2 p-4">
    <div class="mr-4">
      <img :src="cover" class="h-40" />
    </div>
    <div>
      <h2 class="book-title">{{ title }}</h2>
      <p class="book-description">{{ description }}</p>
      <span v-for="tag in tags" class="mr-2 tag">#{{ tag }}</span>
      <div class="flex flex-row items-baseline">
        <div class="bg-lime-400 h-4 w-4 rounded-full mr-2"></div>
        Done
      </div>
      <a class="underline" :href="downloadLink">Download</a>
    </div>
  </div>
</template>

<style scoped>
.book-title {
  @apply text-slate-700 font-semibold text-2xl;
}

.book-description {
  @apply text-slate-700 font-light;
}

.tag {
  @apply text-slate-700 font-light text-sm;
}

a {
  @apply underline text-slate-700;
}

a:hover {
  @apply text-slate-950;
}
</style>
