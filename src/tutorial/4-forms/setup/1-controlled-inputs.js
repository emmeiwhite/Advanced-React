import React, { useState } from "react";
import "./controlled-inputs.css";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  /* --- LET'S Re-Factor our code and use only one function ---*/

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [persons, setPersons] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  // Now we require 1 handler onChange
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      const person = {
        name,
        email,
        age,
        id: new Date().getTime().toString(),
      };
      setIsFormValid(true);
      setPersons([...persons, person]);
      setAge("");
      setName("");
      setEmail("");
    } else {
      setIsFormValid(false);
      console.log("Form cannot be submitted without values");
    }
  };

  return (
    <main className="form-wrapper">
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            id="age"
          />
        </div>

        {!isFormValid && (
          <h4 style={{ color: "red" }}>Fill all the form fields </h4>
        )}
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit Details
          </button>
        </div>
      </form>

      <section className="persons-details">
        <h3>PERSONS</h3>
        {persons.length > 0 &&
          persons.map((person) => (
            <div className="person-card" key={person.id}>
              <span>{person.name}</span>
              <span>{person.age}</span>
              <span>{person.email}</span>
            </div>
          ))}
      </section>
    </main>
  );
};

export default ControlledInputs;
