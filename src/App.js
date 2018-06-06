import React from 'react'
import './App.css'
import * as backend from './BooksAPI'
import Book from './Book'
import {Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks';
import Search from './Search';


class BooksApp extends React.Component {
  componentDidMount(){
    this.getAllBooks()
  }

  getAllBooks() {
    backend.getAll().then((res)=> {
      this.setState((curr) => ({
        books: res
      }))
    })
  }


  state = {
    books:[]
  }

  render() {
    const updateShelf = (book, shelf) => {
      backend.update(book, shelf).then((res) => {
        this.getAllBooks()
    })
    }

    return (
      <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="open-search">
          <Link to="/search">Add a book</Link>
            </div>
      </div>
      <Route exact path="/" render={()=> (
        <ListBooks books={this.state.books} updateShelf={updateShelf} />
      )}/>
      <Route exact path="/search" render={()=> (
        <Search updateShelf={updateShelf} allbooks={this.state.books} />
      )}/>

      </div>
    )
  }
}

export default BooksApp
