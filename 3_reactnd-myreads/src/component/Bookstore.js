import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Loading from './Loading'

const Bookstroe = ({ moveBook, moveBooks, books }) => {

    const filterBook = shelf => books.filter(book => book.shelf === shelf)

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
                    <Bookshelf name='Currently Reading' books={filterBook('currentlyReading')}
                        moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='currentlyReading' />
                    <Bookshelf name='Want to Read' books={filterBook('wantToRead')}
                        moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='wantToRead' />
                    <Bookshelf name='Read' books={filterBook('read')}
                        moveBook={moveBook} moveBooks={moveBooks} displaySelect={true} shelf='read' />
                </div>)
            }
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}


export default Bookstroe