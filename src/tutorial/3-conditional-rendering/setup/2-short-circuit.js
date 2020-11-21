import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <p>{text || "Default Text"}</p>
      <p>{text && "My React Code"}</p>

      <button className="btn" onClick={() => setText("Rather Saeb")}>
        Set Text
      </button>

      {/* Terniary Operator */}
      {text ? "Text is not empty an empty string" : "Text is empty"}
    </div>
  );
};

export default ShortCircuit;
