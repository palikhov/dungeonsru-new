export interface BackendResponse<T> {
  data: T[]
}

export interface BookData {
  id: number
  title: string
  tags: string[]
  finished: boolean
  cover: string
  description: string
  file: string
}
