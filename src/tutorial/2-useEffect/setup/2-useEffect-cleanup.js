import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setSize(window.innerWidth);
  };
  // scenario is to get the window size each time
  // we will set event listener inside our useEffect for this
  useEffect(() => {
    console.log("useEffect() as componentDidMount");
    window.addEventListener("resize", getWindowWidth);

    // cleanup return function in useEffect()
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", getWindowWidth);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h1>{size} px</h1>
    </>
  );
};

export default UseEffectCleanup;
