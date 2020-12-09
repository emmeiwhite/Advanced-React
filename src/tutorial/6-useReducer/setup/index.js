import React, { useState, useReducer, useEffect } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import "./Index.css";
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedPeople = [...state.people, action.payload];
      console.log(updatedPeople);
      return {
        ...state,
        people: updatedPeople,
        isModalOpen: true,
        modalText: "Person Added Successfully",
      };

    case "NO_VALUE":
      return {
        ...state,
        modalText: "No Value Provided Yet",
      };
    default:
      return state;
  }
};
// Initial State
const initialState = {
  people: [],
  isModalOpen: false,
  modalText: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const person = { id: new Date().getTime().toString(), name };
      console.log(person);
      dispatch({ type: "ADD_ITEM", payload: person });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <main>
      {state.isModalOpen && <Modal modalText={state.modalText} />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
