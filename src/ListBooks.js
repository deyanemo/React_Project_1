import React, {Component} from 'react'
import BookShelf from './BookShelf'



class ListBooks extends Component {


     render() {
         const {books} = this.props
         const CurrentRead = books.filter((book) => book.shelf === 'currentlyReading')
         const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
         const Read = books.filter((book) => book.shelf === 'read')

           return (
                <div>
                    <BookShelf Title={"Current Reads"} book={CurrentRead} updateShelf={this.props.updateShelf}/>
                    <BookShelf Title={"Want To Reads"} book={wantToRead}  updateShelf={this.props.updateShelf}/>
                    <BookShelf Title={"Reading"} book={Read}  updateShelf={this.props.updateShelf}/>
                    
                </div>
            )
    }
}




export default ListBooks