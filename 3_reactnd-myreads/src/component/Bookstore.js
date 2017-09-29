import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Loading from './Loading'

class Bookstroe extends Component {

    filterBook = shelf => {
        return this.props.books.filter(book => book.shelf === shelf)
    }

    render() {
        const { moveBook, moveBooks, books } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {books.length === 0 ?
                    (<div className="loading">
                        <h2>loading...</h2>
                        <Loading />
                    </div>) :
                    (<div className="list-books-content">
                        <Bookshelf name='Currently Reading' books={this.filterBook('currentlyReading')}
                            moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='currentlyReading' />
                        <Bookshelf name='Want to Read' books={this.filterBook('wantToRead')}
                            moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='wantToRead' />
                        <Bookshelf name='Read' books={this.filterBook('read')}
                            moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='read' />
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