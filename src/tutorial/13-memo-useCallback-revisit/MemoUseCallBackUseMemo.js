import React, { useState, useEffect } from "react";

export default function MemoUseCallBackUseMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <ChildComponent />
    </div>
  );
}

const ChildComponent = () => {
  useEffect(() => {
    console.count("ChildComponent");
  });
  return (
    <div style={{ marginTop: "2rem" }}>
      <h4>Child Component</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quas.
      </p>
    </div>
  );
};
