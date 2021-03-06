import React, { createContext, useState, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: 'Harry Potter and the Giblets of Fire', author: 'JK Balling', id: 213 },
    { title: 'Twilight: The Moon\'s Crack', author: 'Mike Meyers', id: 32 }
  ]);

  return (
    <BookContext.Provider
      value={{
        books,
        dispatch
      }}
    >
      { props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;