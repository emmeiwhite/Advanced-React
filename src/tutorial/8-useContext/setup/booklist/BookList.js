import React, { useContext } from "react";
import Book from "./Book";

import { BookContext } from "./contexts/ContextData";

export default function BookList() {
  const { myBooks } = useContext(BookContext);
  return (
    <div>
      {myBooks.length > 0 &&
        myBooks.map((book) => <Book {...book} key={book.id} />)}
    </div>
  );
}
