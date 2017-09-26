import React, { Component } from 'react'

class Book extends Component {

    constructor() {
        super()
        this.state = { shelf: 'none' }
    }

    moveBook = value => {
        this.props.moveBook({ id: this.props.id }, value)
        this.setState({ shelf: value })
    }


    render() {
        const { title, authors, imageLinks: { thumbnail } } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={e => this.moveBook(e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book