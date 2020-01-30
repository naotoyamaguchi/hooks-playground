import React , { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } } );
    setTitle("");
    setAuthor("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} required/>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} required/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default NewBookForm;