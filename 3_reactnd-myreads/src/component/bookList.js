import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf';

class BookList extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList