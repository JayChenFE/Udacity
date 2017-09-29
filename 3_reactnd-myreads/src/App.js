import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookstroe from './component/Bookstore'
import Search from './component/Search'
import './App.css'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  constructor() {
    super()
    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBooks = (originShelf, destinationShelf) => {
    let { books } = this.state,
      updatedBooks = books.filter(book => book.shelf === originShelf),
      allBooks = []

    updatedBooks.forEach(book => {
      BooksAPI.update(book, destinationShelf)
      book.shelf = destinationShelf
    })
    allBooks = books.filter(book => book.shelf !== originShelf).concat(updatedBooks)
    this.setState({ book: allBooks })
  }

  moveBook = (book, updatedShelf) => {
    const { books } = this.state
    let updatedBooks = Object.assign([], books),
      copyBook = Object.assign({}, book),
      bookIndex = books.findIndex(b => b.id === book.id)

    if (bookIndex === -1) {
      copyBook.shelf = updatedShelf
      updatedBooks.push(copyBook)
    } else {
      updatedBooks[bookIndex].shelf = updatedShelf
    }

    BooksAPI.update(book, updatedShelf).then(
      this.setState({ books: updatedBooks })
    )
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={_ =>
          (<Bookstroe
            books={books}
            moveBook={this.moveBook}
            moveBooks={this.moveBooks}>
          </Bookstroe>
          )}></Route>
        <Route path='/search' render={_ => (
          <Search existBooks={books}
            moveBook={this.moveBook}></Search>
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
