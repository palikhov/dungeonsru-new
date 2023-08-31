<script lang="ts">
import {defineComponent} from 'vue'

import Book from '../components/Book.vue'
import {BackendResponse} from '../interfaces'
import {mande} from 'mande'

interface BookData {
  id: number
  title: string
  tags: string[]
  finished: boolean
  cover: string
  description: string
  file: string
}

export default defineComponent({
  components: {
    Book,
  },
  data() {
    return {
      books: [] as BookData[],
    }
  },
  async mounted() {
    const api = mande('api')
    const response = await api.get<BackendResponse<BookData>>('/items/books')
    this.books = response.data
  },
})
</script>

<template>
  <h1 class="text-slate-800 font-sans font-semibold text-5xl">Books</h1>
  <Book
    v-for="book in books"
    :key="book.id"
    :title="book.title"
    :finished="book.finished"
    :cover="book.cover"
    :tags="book.tags"
    :description="book.description"
    :download-link="book.file"
  />
</template>
