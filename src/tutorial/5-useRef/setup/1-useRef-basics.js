import React, { useEffect, useRef } from "react";

// UnControlled Input
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
    divRef.current.style.color = "red";
  };

  // Auto Focus technique | We do not need 2nd argument since useRef does not trigger a re-render
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          required
          ref={refContainer}
        />
        <button type="submit">Submit</button>
      </form>

      <div ref={divRef}>This is div 1</div>
    </>
  );
};

export default UseRefBasics;
