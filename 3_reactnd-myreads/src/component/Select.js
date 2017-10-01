import React, { Component } from 'react'

class Select extends Component {

    constructor() {
        super()
        this.state = { shelf: 'none' }
    }

    move = newShelf => {
        const { shelf, category, moveBook, moveBooks } = this.props
        category ? moveBooks(shelf, newShelf) : moveBook(newShelf)
        this.setState({ shelf: newShelf })
    }

    render() {
        const { shelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select
                    value={shelf}
                    onChange={e => this.move(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Select