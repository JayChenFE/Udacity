import React, { Component } from 'react'
import Book from './book';

function BookSelf({ name, books, updateBookShelf }) {
    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    books.sort((x, y) => { x.title < y.title })
                        .map(book => (
                            <li key={book.id}>
                                <Book id={book.id} title={book.title} imageLinks={book.imageLinks}
                                    shelf={book.shelf} updateBookShelf={updateBookShelf} >
                                </Book>
                            </li>
                        ))
                }
            </ol>
        </div>
    </div>)
}

export default BookSelf