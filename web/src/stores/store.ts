import {mande} from 'mande'
import {defineStore} from 'pinia'
import {BackendResponse, BookData, BookTag} from '../interfaces'

export const useAppStore = defineStore('app', {
  state() {
    return {
      books: [] as BookData[],
      bookTags: [] as BookTag[],
    }
  },
  actions: {
    async getTags() {
      const api = mande('api')
      const response = await api.get<BackendResponse<BookTag>>(
        'items/book_tags'
      )
      this.bookTags = response.data
    },
    async getBooks(tags: BookTag[], query: string | null) {
      const api = mande('api')
      const fields_string = '*,tags.book_tags_id.*'
      if (tags.length == 0) {
        const response = await api.get<BackendResponse<BookData>>(
          '/items/books',
          query
            ? {
                query: {
                  fields: fields_string,
                  search: query,
                },
              }
            : {
                query: {
                  fields: fields_string,
                },
              }
        )
        this.books = response.data
        return
      }

      const filter = {
        _and: tags.map((tag) => {
          return {
            tags: {
              _some: {
                book_tags_id: {
                  id: {
                    _eq: tag.id,
                  },
                },
              },
            },
          }
        }),
      }
      const response = await api.get<BackendResponse<BookData>>(
        '/items/books',
        query
          ? {
              query: {
                filter: JSON.stringify(filter),
                fields: fields_string,
                search: query,
              },
            }
          : {
              query: {
                filter: JSON.stringify(filter),
                fields: fields_string,
              },
            }
      )
      this.books = response.data
    },
  },
})
