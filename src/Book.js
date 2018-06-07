import React, {Component} from 'react'



class Book extends Component {
     render() {
         const {book} = this.props 
         const {allbooks} = this.props
        //  console.log(book)
         let status;
         const deyanemo = function() {
            if(typeof allbooks === 'undefined') {
                status =  book.shelf ? book.shelf : 'none'
            }else {
                let data = Object.keys(allbooks).filter(c => allbooks[c].id === book.id).map(d => allbooks[d].shelf)[0]
                status =  data ? data : 'none'
            }
         }

         deyanemo()
        // let deya = Object.keys(allbooks).filter(c => allbooks[c].id === book.id).map(d => allbooks[d].shelf)[0]
        // console.log(deya)
         const changeShelf = (event) => {
             let shelf = event.target.value
            this.props.updateShelf(book, shelf)
         }
         let style = { width: 128, height: 193, backgroundImage: `url(${book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : ''})` }
           return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={style}></div>
                        <div className="book-shelf-changer">
                        <select onChange={(event) => {
                            changeShelf(event)
                        }} value={status}>
                            <option value="none" disabled>Move to...</option>
                            <option  value="currentlyReading">Currently Reading</option>
                            <option  value="wantToRead">Want to Read</option>
                            <option  value="read">Read</option>
                            <option  value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    </div>
                    </li>
            
            )
    }
}




export default Book