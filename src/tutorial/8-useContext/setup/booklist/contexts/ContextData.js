import React, { useState, useEffect } from "react";
import BookList from "../BookList";

export const BookContext = React.createContext();
// We get access to Provider and Consumer components

const books = [
  { id: 1, name: "The way of the kings" },
  { id: 2, name: "The people of Paradise" },
  { id: 3, name: "Protest of the Farmers" },
];

export default function ContextData({ children }) {
  const [myBooks, setMyBooks] = useState(books);
  const removeBook = (id) => {
    setMyBooks(() => {
      return myBooks.filter((book) => book.id !== id);
    });
  };
  return (
    <BookContext.Provider value={{ myBooks, removeBook }}>
      <BookList />
    </BookContext.Provider>
  );
}
