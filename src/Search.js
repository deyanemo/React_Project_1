import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as backend from './BooksAPI'
import Book from './Book';


class Search extends Component {

    state = {
        books: [],
        error: ''
    }
     render() {
         const search = (event) => {
             //Get the query 
             let query = event.target.value
             backend.search(query).then(res => {
                if (Array.isArray(res)) {
                    // Check is its array then add to state
                    this.setState((current) =>(
                        {books:res}
                    ))
                }else {
                    // ERROR 
                    this.setState((res) =>(
                        {error:res.error}
                    ))
                }
             })
         }

           return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to= "/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={search}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.map(book =>(
                  <Book key={book.id} book={book}  updateShelf={this.props.updateShelf} />
              ))}
              </ol>
            </div>
          </div>
            )
    }
}




export default Search