<script lang="ts">
import {defineComponent} from 'vue'
import {RouterLink} from 'vue-router'

export default defineComponent({
  components: {
    RouterLink,
  },
})
</script>

<template>
  <div class="my-12">
    <RouterLink class="mr-10" to="/"> Blog </RouterLink>
    <RouterLink class="mx-10" to="/books"> Books </RouterLink>
  </div>
</template>

<style scoped>
a {
  @apply text-slate-800 font-semibold text-xl;
}

a:hover {
  @apply text-slate-900 underline underline-offset-4 decoration-2;
}
</style>
