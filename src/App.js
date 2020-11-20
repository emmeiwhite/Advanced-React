import React from "react";
/** --- useState() --- */
import ErrorExample from "./tutorial/1-useState/setup/1-error-example";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";

/** --- useEffect() --- */
import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";

function App() {
  return (
    <div className="container">
      {/* 
        <ErrorExample />
      <UseStateObject />
      <UseStateCounter />
      
      <UseStateArray />
      */}
      <UseEffectBasics />
    </div>
  );
}

export default App;
