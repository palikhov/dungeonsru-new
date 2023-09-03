<script lang="ts">
import {defineComponent} from 'vue'

import Book from '../components/Book.vue'
import {useAppStore} from '../stores/store'
import {BookTag} from '../interfaces'

export default defineComponent({
  components: {
    Book,
  },
  computed: {
    books() {
      const store = useAppStore()
      return store.books
    },
    filterTags() {
      const store = useAppStore()
      return store.bookTags
    },
  },
  data() {
    return {
      selectedTags: [] as BookTag[],
    }
  },
  methods: {
    toggleTag(tag: BookTag) {
      const index = this.selectedTags.findIndex((in_) => in_ == tag)
      if (index == -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
      const store = useAppStore()
      store.getBooks(this.selectedTags)
    },
  },
  async mounted() {
    const store = useAppStore()
    await store.getTags()
    await store.getBooks([])
  },
})
</script>

<template>
  <h1 class="page-title">Книги</h1>
  <div class="flex flex-wrap">
    <button
      v-for="tag in filterTags"
      :key="tag.id"
      class="tag-button"
      :class="{
        'bg-slate-200': !selectedTags.includes(tag),
        'bg-slate-400': selectedTags.includes(tag),
      }"
      @click="toggleTag(tag)"
    >
      {{ tag.name }}
    </button>
  </div>
  <Book
    v-for="book in books"
    :key="book.id"
    :title="book.title"
    :finished="book.finished"
    :cover="book.cover"
    :tags="book.tags.map((tag) => tag.book_tags_id)"
    :description="book.description"
    :download-link="book.file"
  />
</template>

<style scoped>
.tag-button {
  @apply mr-2 mb-2 text-slate-800 px-2 py-1 rounded hover:bg-slate-500 hover:text-slate-100;
}
</style>
