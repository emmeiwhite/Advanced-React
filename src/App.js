import React from "react";
/** --- useState() --- */
import ErrorExample from "./tutorial/1-useState/setup/1-error-example";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";

/** --- useEffect() --- */
import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";
import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";

function App() {
  return (
    <div className="container">
      {/* 
      <ErrorExample />
      <UseStateObject />
      <UseStateCounter />
      
      <UseStateArray />
     
      <UseEffectBasics />
       
      <UseEffectCleanup />
      
      <UseEffectFetchData />
      

      <MultipleReturns />
      */}
      <ShortCircuit />
    </div>
  );
}

export default App;
