import React, { Component } from 'react'

class Select extends Component {

    move = value => {
        const { category, moveBook, moveBooks } = this.props
        
        if (category) {
            
        } else {
            
        }

    }

    render() {

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