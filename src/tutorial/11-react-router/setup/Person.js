import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useHistory, useParams } from "react-router-dom";

// Every component rendered based on our React-Router will have access to 3 props. match, location, history
const Person = ({ children }) => {
  const { id } = useParams();

  return (
    <div>
      <h2>person</h2>
      <p>
        Person : <strong>{id}</strong>
      </p>
      <span>
        In our Person Placeholder Component, we need to make another API call
        for the particular ids and get information about the person based on the
        ID coming from People Component
      </span>

      <TestingRouterProps />
    </div>
  );
};

/* --- Hooks in React-Router-DOM. Version-5.1 onwards 
  https://reacttraining.com/blog/react-router-v5-1/
---*/

const TestingRouterProps = () => {
  const { id } = useParams();
  console.log("Testing useParams in children of main Route Component");
  console.log(id);
  let history = useHistory();

  const handleClick = () => {
    history.push("/people");
  };
  return (
    <div>
      <p>PROP RECEIVED :{id}</p>
      <button onClick={handleClick}>People</button>
    </div>
  );
};
export default Person;
