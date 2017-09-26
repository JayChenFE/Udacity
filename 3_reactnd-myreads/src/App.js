import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookstroe from './component/bookstore'
import './App.css'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  constructor() {
    super()
    this.state = BooksAPI.getAll().then(books => {
      this.setState({ books: books })
    })
  }

  moveBook = () => { }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() =>
          (<Bookstroe
            books={books}>

          </Bookstroe>
          )}></Route>
        <Route></Route>
      </div>
    )
  }
}

export default BooksApp
