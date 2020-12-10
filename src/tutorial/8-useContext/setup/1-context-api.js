import React, { useState, useContext, createContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

// In order to get rid of prop-drilling, we use Context-API as well as Redux. We'll cover Context-API here !!!

const PersonContext = createContext();
// As soon as we create our context we have access to two components
// 1) Provider and 2) Consumer
// We'll not use Consumer, instead we will consume our context using useContext() Hook

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value="My Global Value">
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  const value = useContext(PersonContext);

  return (
    <div className="item">
      <h4>
        {name} {value}
      </h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
