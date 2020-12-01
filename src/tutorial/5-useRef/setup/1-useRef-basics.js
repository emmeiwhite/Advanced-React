import React, { useEffect, useRef } from "react";

// UnControlled Input
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
  };

  // useEffect(()=>{
  //   refContainer.current.focus()
  // })
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
    </>
  );
};

export default UseRefBasics;
