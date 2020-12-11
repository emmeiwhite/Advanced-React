import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

// Every component rendered based on our React-Router will have access to 3 props. match, location, history
const Person = () => {
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

/* --- Hooks in React-Router-DOM. Version-5.1 onwards ---*/

const TestingRouterProps = () => {
  const { id } = useParams();
  console.log("Testing useParams in children of main Route Component");
  console.log(id);
  return <h1>Testing Prop</h1>;
};
export default Person;
