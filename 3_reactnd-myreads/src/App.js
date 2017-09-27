import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookstroe from './component/bookstore'
import './App.css'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBook = (book, updatedShelf) => {
    const { books } = this.state
    let updatedBooks = Object.assign([], books),
      newBook = Object.assign({}, book),
      bookIndex = book.findIndex(b => b.id === book.id)
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
        <Route></Route>
      </div>
    )
  }
}

export default BooksApp
