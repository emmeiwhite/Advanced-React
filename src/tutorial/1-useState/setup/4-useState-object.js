import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mudasir",
    age: 29,
    designation: "Professor",
  });

  const handlePerson = () => {
    person.designation === "Web Developer"
      ? setPerson({ ...person, designation: "Professor" })
      : setPerson({ ...person, designation: "Web Developer" });
  };

  return (
    <div>
      <h1>Person Details :</h1>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.designation}</p>

      <button onClick={handlePerson}>Update Person Details</button>
    </div>
  );
};

export default UseStateObject;
