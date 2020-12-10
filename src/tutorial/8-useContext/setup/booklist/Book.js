import React from "react";
import { BookContext } from "./contexts/ContextData";

const style = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  background: "#eee",
  margin: "0.5rem 0",
  padding: "0.5rem 1rem",
  alignItems: "center",
};
export default function Book({ id, name }) {
  const { removeBook } = React.useContext(BookContext);
  return (
    <div style={style}>
      <span>{name}</span>
      <button onClick={() => removeBook(id)}>delete</button>
    </div>
  );
}
