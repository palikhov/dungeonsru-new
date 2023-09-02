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
  <div class="my-12 flex flex-row-reverse">
    <RouterLink class="mx-10" to="/books">Каталог материалов</RouterLink>
    <RouterLink class="mr-10" to="/">Блог</RouterLink>
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
