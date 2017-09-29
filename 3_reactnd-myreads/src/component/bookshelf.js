import React from 'react'
import Book from './Book'
import Select from './Select'

const Bookshelf = ({ name, books, moveBook, moveBooks, displaySelect, shelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="select-container">
            {displaySelect && <Select shelf={shelf} category={true} moveBooks={moveBooks} />}
        </div>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    books.sort((x, y) => x.title < y.title)
                        .map(book => (
                            <li key={book.id}>
                                <Book id={book.id} authors={book.authors} title={book.title}
                                    imageLinks={book.imageLinks} shelf={book.shelf}
                                    moveBook={moveBook} />
                            </li>))
                }
            </ol>
        </div>
    </div>
)

export default Bookshelf