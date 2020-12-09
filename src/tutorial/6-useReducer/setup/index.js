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
      console.log("WORKING FINE");
      return {
        ...state,
        isModalOpen: true,
        modalText: "No Value Provided Yet",
      };

    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };

    case "DELETE_ITEM":
      const updatedList = state.people.filter(
        (people) => people.id !== action.payload
      );
      return {
        ...state,
        people: updatedList,
        modalText: "Item Removed",
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
      dispatch({ type: "ADD_ITEM", payload: person });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  // To close modal after some time | A pretty nice trick is to pass this as prop to Modal Component
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <main className="main-wrapper">
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalText={state.modalText} />
      )}

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
          state.people.map(({ id, name }) => (
            <li key={id} className="list-item">
              <p>{name}</p>
              <p className="delete-item" onClick={() => handleDelete(id)}>
                Delete
              </p>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Index;
