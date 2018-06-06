import React, {Component} from 'react'
import Book from './Book'




class BookShelf extends Component {

     render() {
         const {book} = this.props
           return (
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.Title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {book.map(res => (
                                <Book key={res.id} book={res}  updateShelf={this.props.updateShelf} />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            </div>
        )

    }
}




export default BookShelf