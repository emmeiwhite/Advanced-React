import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      <p>{text || "Default Text"}</p>
      <p>{text && "My React Code"}</p>
      <button className="btn" onClick={() => setText("Rather Saeb")}>
        Set Text
      </button>
    </div>
  );
};

export default ShortCircuit;
