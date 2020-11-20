import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect run !!!");
    document.title = `Title Updated : ${value}`;
  });

  const handleClick = () => {
    setValue((prevValue) => {
      return prevValue + 1;
    });
  };

  return (
    <main>
      <h2>useEffect Basics</h2>
      Value is :{value}
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
};

export default UseEffectBasics;
