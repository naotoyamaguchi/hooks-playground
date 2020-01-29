import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <ol>
      { books.map(book => (
        <li key={book.id}>{ book.title } by { book.author }</li>
      ))}
    </ol>
  ) : (
    <div className="empty">No books in this list!</div>
  )
}

export default BookList;