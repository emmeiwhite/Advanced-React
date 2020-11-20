import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleComplexCounter = (e) => {
    console.log("Complex Counter");
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <section style={{ border: "1px solid #ccc" }}>
      <article>
        <h4 style={{ margin: "1rem 0" }}>Regular Counter</h4>
        <p>{counter}</p>
        <button onClick={(e) => setCounter(counter + 1)}>increase</button>
        <button onClick={(e) => setCounter(0)}>reset</button>
        <button onClick={(e) => setCounter(counter - 1)}>decrease</button>
      </article>

      <article>
        <p>{counter}</p>
        <h4 style={{ margin: "1rem 0" }}>Complex Counter</h4>
        <button onClick={handleComplexCounter}>increase</button>
      </article>
    </section>
  );
};

export default UseStateCounter;
