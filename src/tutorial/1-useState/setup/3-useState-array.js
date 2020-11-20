import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  console.log(data);

  const handleClick = (id) => {
    setPeople((oldPeople) => {
      const newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
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
      {people.length ? (
        <button style={{ margin: "0 auto" }} onClick={handleClearAll}>
          {" "}
          clear all
        </button>
      ) : (
        <p>No More persons to be listed now</p>
      )}
    </main>
  );
};

export default UseStateArray;
