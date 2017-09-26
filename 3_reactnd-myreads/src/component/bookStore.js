import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf';

class BookStroe extends Component {

    filterBook = shelf => { this.props.books.fliter(book => book.shelf === shelf) }

    render() {
        const { moveBook } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf name='Currently Reading' moveBook={moveBook} books={filterBook('currentlyReading')}>
                    </Bookshelf>
                    <Bookshelf name='Want to Read' moveBook={moveBook} books={filterBook('wantToRead')}>
                    </Bookshelf>
                    <Bookshelf name='Read' moveBook={moveBook} books={filterBook('read')}>
                    </Bookshelf>
                </div>
            </div>
        )
    }
}

export default BookStroe