import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import "./Index.css";
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setShowModal(true);
      const person = { name: text, id: new Date().getTime().toString() };
      console.log(person);
      setPeople([...people, person]);
      setText("");
    } else {
      setShowModal(true);
    }
  };
  return (
    <main>
      {showModal && <Modal />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {people.length > 0 &&
          people.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </main>
  );
};

export default Index;
