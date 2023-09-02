import {mande} from 'mande'
import {defineStore} from 'pinia'
import {BackendResponse, BookData} from '../interfaces'

export const useAppStore = defineStore('app', {
  state() {
    return {
      books: [] as BookData[],
    }
  },
  actions: {
    async getBooks(tags: string[]) {
      const api = mande('api')
      let data: any = []
      if (tags.length != 0) {
        // TODO: Directus does not support filtering in JSON fields
        // this should handled by https://github.com/directus/directus/pull/15889
        // but it is not completed yet :(
        const filter = {
          tags_test: {
            _contains: tags[0],
          },
        }
        const api = mande('api')
        const response = await api.get<BackendResponse<BookData>>(
          '/items/books',
          {
            query: {
              filter: JSON.stringify(filter),
            },
          }
        )
        this.books = response.data
      } else {
        const response = await api.get<BackendResponse<BookData>>(
          '/items/books'
        )
        this.books = response.data
      }
      return data
    },
  },
})
