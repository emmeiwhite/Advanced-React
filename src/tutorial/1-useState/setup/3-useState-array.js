import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  console.log(data);

  const handleClick = (id) => {
    const updatedPersons = people.filter((person) => person.id !== id);
    setPeople(updatedPersons);
  };

  const handleClearAll = () => {
    setPeople([]);
  };
  const personsJSX =
    people &&
    people.map((person) => {
      return (
        <div
          key={person.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            border: "1px solid #ccc",
            width: "500px",
            margin: "0 auto",
          }}
        >
          <span>{person.name}</span>
          <span
            onClick={() => handleClick(person.id)}
            style={{ cursor: "pointer" }}
          >
            remove
          </span>
        </div>
      );
    });
  return (
    <main>
      <h1>People in the Department :</h1>
      {personsJSX}
      <button style={{ margin: "0 auto" }} onClick={handleClearAll}>
        {" "}
        clear all
      </button>
    </main>
  );
};

export default UseStateArray;
