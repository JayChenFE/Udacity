import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Bookshelf from './Bookshelf'

class Search extends Component {

    constructor() {
        super()
        this.state = { query: '', books: [] }
    }

    updateQuery = query => {
        this.setState({ query: query.trim() })
    }

    search = _ => {
        const { query } = this.state
        const { existBooks } = this.props
        BooksAPI.search(query, 20).then(resultBooks => {
            debugger
            if (resultBooks && resultBooks.length > 0) {
                //resultBooks

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
                        <input type="text" placeholder="Search by title or author, press Enter to go"
                            onChange={event => this.updateQuery(event.target.value)}
                            onKeyPress={event => {
                                if (event.keyCode === 13) {
                                    alert('hi')
                                    this.search()
                                }
                            }} />
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


