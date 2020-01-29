import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Book List</h1>
      <p>Currently you have { books.length } books on your list</p>
    </div>
  )
}

export default NavBar;