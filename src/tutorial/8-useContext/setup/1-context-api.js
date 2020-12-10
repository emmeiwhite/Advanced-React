import React, { useState, useContext, createContext } from "react";
import { data } from "../../../data";
import ContextData from "./booklist/contexts/ContextData";

// more components
// fix - context api, redux (for more complex cases)

// In order to get rid of prop-drilling, we use Context-API as well as Redux. We'll cover Context-API here !!!

const PersonContext = createContext();
// As soon as we create our context we have access to two components
// 1) Provider and 2) Consumer
// We'll not use Consumer, instead we will consume our context using useContext() Hook

const ContextAPI = () => {
  /* --- My Global State --- */
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  // We have access to the value property in our Provider
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>Context API | useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

// THE LIST COMPONENT
const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}

      <ContextData />
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
};

export default ContextAPI;
