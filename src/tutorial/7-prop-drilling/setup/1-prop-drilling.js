import React, { useState } from "react";
import { data } from "./../../../data";
import "./prop-drilling.css";

// Passing props down to the component tree even when some components in between the component tree don't need the props and only act as prop carriers
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = (id) => {
    const updatedList = people.filter((person) => person.id !== id);
    setPeople(updatedList);
  };

  return (
    <main className="main-wrapper">
      <h3>Prop Drilling</h3>
      <List people={people} handleDelete={handleDelete} />
    </main>
  );
};

const List = ({ people, handleDelete }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person {...person} key={person.id} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

const Person = ({ id, name, handleDelete }) => {
  return (
    <div className="person-detail">
      <span>{name}</span>
      <span onClick={() => handleDelete(id)}>Delete</span>
    </div>
  );
};
export default PropDrilling;
