<script lang="ts">
import { defineComponent } from 'vue'

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
})
</script>

<template>
  <div class="mb-12">
    <h2 class="text-slate-800 font-semibold text-3xl mb-2">{{ title }}</h2>
    <p class="text-slate-900">{{ content }}</p>
  </div>
</template>
