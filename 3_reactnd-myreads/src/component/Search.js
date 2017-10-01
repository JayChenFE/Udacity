import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import * as BooksAPI from '../BooksAPI'
import Bookshelf from './Bookshelf'
class Search extends Component {

    constructor() {
        super()
        this.state = { books: [] }
    }

    query = query => {
        const { existBooks } = this.props
        BooksAPI.search(query.trim(), 20).then(resultBooks => {
            if (resultBooks && resultBooks.length > 0) {
                //merge the books
                const mergedBooks =
                    resultBooks.filter(book =>
                        existBooks.findIndex(existBook =>
                            existBook.id === book.id) === -1)
                        .map(book => {
                            book.shelf = 'none'
                            return book
                        })
                        .concat(existBooks.filter(book =>
                            resultBooks.findIndex(resultBook =>
                                resultBook.id === book.id) >= 0))

                this.setState({ books: mergedBooks })
            }
        })
    }

    render() {
        const { books } = this.state
        const { moveBook } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="200" handler="onChange">
                            <input type="text" placeholder="search by  title or author"
                                onChange={event => this.query(event.target.value)} />
                        </Debounce>
                    </div>
                </div>
                < div className="search-books-results">
                    <Bookshelf name='Search Result' books={books} moveBook={moveBook} />
                </div>
            </div>
        )
    }
}
export default Search


