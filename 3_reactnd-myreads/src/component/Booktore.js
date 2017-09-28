import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Loading from './Loading'

class Bookstroe extends Component {

    filterBook = shelf => {
        return this.props.books.filter(book => book.shelf === shelf)
    }

    render() {
        const { moveBook, books } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {books.length === 0 ?
                    (<div className="loading">
                        <h2>loading...</h2>
                        <Loading color='#aaa'></Loading>
                    </div>) :
                    (<div className="list-books-content">
                        <Bookshelf name='Currently Reading' books={this.filterBook('currentlyReading')} moveBook={moveBook} />
                        <Bookshelf name='Want to Read' books={this.filterBook('wantToRead')} moveBook={moveBook} />
                        <Bookshelf name='Read' books={this.filterBook('read')} moveBook={moveBook} />
                    </div>)
                }
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Bookstroe