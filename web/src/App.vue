<script lang="ts">
import { defineComponent } from 'vue'

import Topbar from './components/Topbar.vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  components: {
    Topbar,
    RouterView,
  },
})
</script>

<template>
  <div class="container px-12">
    <Topbar></Topbar>
    <RouterView></RouterView>
  </div>
</template>
