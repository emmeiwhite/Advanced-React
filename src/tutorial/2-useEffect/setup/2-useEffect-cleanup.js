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
    window.addEventListener("resize", getWindowWidth);
  });

  return (
    <>
      <h1>Window</h1>
      <h1>{size} px</h1>
    </>
  );
};

export default UseEffectCleanup;
