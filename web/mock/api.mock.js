const booksList = [
  {
    id: 1,
    title: 'Princes of the Apocalypse',
    cover: '_blank',
    description:
      'Первые признаки бедствия всегда незначительны: разбойники на дорогах, пираты на реке Дессарин, слухи о чудовищах вокруг холмов Самбер — всё это слишком близко к цивилизованным землям.\n\nВ довершение ко всему пропала без вести делегация из дварфийского города Мирабара. Являются ли все эти события просто совпадением, или же за ними скрывается единая причина?\n\nПри поддержке своих пророков Древнее Элементальное Око явилось сеять хаос в Забытых Королевствах. Как искатели приключений смогут предотвратить тотальное опустошение?',
    finished: true,
    file: '_blank',
    tags: [
      {
        book_tags_id: {
          id: 1,
          name: 'DnD 5e'
        }
      },
      {
        book_tags_id: {
          id: 2,
          name: 'Adventures'
        }
      }
    ],
  },
  {
    id: 2,
    title: 'DDAL 04-13 — The Horseman',
    cover: '_blank',
    description:
      'Неизвестная сила подстрекает людей и существ идиллического Зелёного Зала к кровопролитию и убийствам. Смогут ли персонажи подавить растущий гнев неистового всадника?',
    finished: true,
    file: '_blank',
    tags: [
      {
        book_tags_id: {
          id: 1,
          name: 'DnD 5e'
        }
      },
      {
        book_tags_id: {
          id: 2,
          name: 'Adventures'
        }
      },
      {
        book_tags_id: {
          id: 3,
          name: 'Adventurers League'
        }
      }
    ],
  },
]

function getBooks(filter) {
  if (filter === undefined) {
    return booksList
  } else {
    // make a filter handler
    return booksList
  }
}

const booksHandler = {
  pattern: '/api/items/books',
  handle: (req, res) => {
    const data = {
      data: booksList,
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  },
}

const bookTagsHandler = {
  pattern: '/api/items/book_tags',
  handle: (req, res) => {
    const data = {
      data: [
        {
          id: 1,
          name: 'DnD 5e',
        },
        {
          id: 2,
          name: 'Adventures',
        },
        {
          id: 3,
          name: 'Adventurers League',
        },
      ],
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
}

const postsList = [
  {
    id: 1,
    title: 'DDAL 04-13 — The Horseman — Всадник',
    content:
      'На странице по Лиге Приключенцев выложен перевод приключения\n\nDDAL-04-13 — Всадник\n\n__Для уровней 5–10__',
  },
  {
    id: 2,
    title: 'Van Richten’s Guide to Ravenloft — Руководство Ван Рихтена по Равенлофту',
    content:
      'Доступен перевод путеводителя по сеттингу Равенлофт\n\nVan Richten’s Guide to Ravenloft — Руководство Ван Рихтена по Равенлофту',
  },
]

const postsHandler = {
  pattern: '/api/items/posts',
  handle: (req, res) => {
    const data = {
      data: postsList,
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  },
}

module.exports = [booksHandler, bookTagsHandler, postsHandler]
