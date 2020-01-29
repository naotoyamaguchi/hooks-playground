import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Harry Potter and the Giblets of Fire', author: 'JK Balling', id: 213 },
    { title: 'Twilight: The Moon\'s Crack', author: 'Mike Meyers', id: 32 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {
      title,
      author,
      id: uuid()
    }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook
      }}
    >
      { props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;