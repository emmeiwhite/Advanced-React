import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import "./Index.css";
// reducer function
const reducer = (state, action) => {};
// Initial State
const initialState = {
  people: data,
  isModalOpen: true,
  modalText: "Short Modal",
};
const Index = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setText("");
    } else {
    }
  };
  return (
    <main>
      {state.isModalOpen && <Modal modalText={state.modalText} />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {state.people.length > 0 &&
          state.people.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </main>
  );
};

export default Index;
