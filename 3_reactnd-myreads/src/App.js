import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookstroe from './component/Booktore'
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

  moveBook = (book, updatedShelf) => {
    const { books } = this.state
    let updatedBooks = Object.assign([], books),
      copyBook = Object.assign({}, book),
      bookIndex = books.findIndex(b => b.id === book.id)

    if (bookIndex === -1) {
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
            moveBook={this.moveBook}>
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
