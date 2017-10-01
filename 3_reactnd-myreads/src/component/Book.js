import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import Select from './Select';

class Book extends Component {

    constructor(props) {
        super(props)
        const { id } = this.props
        const rating = +(localStorage.getItem(`${id}rating`) || "5")
        this.state = { shelf: 'none', rating: rating }
    }

    componentDidMount() {
        const { shelf } = this.props
        this.setState({ shelf })
    }

    moveBook = value => {
        this.props.moveBook(this.props, value)
        this.setState({ shelf: value })
    }

    onStarClick(nextValue, prevValue, name) {
        localStorage.setItem(`${this.props.id}rating`, nextValue)
        this.setState({ rating: nextValue })
    }

    render() {
        const { rating, shelf } = this.state
        const { id, title, authors, imageLinks } = this.props
        const thumbnail = imageLinks ? imageLinks.thumbnail : ''
        const author = authors ? authors.join(' ') : ''
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}>
                    </div>
                    <Select category={false} shelf={shelf} moveBook={this.moveBook} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
                <StarRatingComponent
                    name={`${id}rate`}
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)} />
            </div>
        )
    }
}

export default Book