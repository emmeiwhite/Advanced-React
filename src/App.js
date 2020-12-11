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
import ShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";
import ControlledInputs from "./tutorial/4-forms/setup/1-controlled-inputs";
import UseRefBasics from "./tutorial/5-useRef/setup/1-useRef-basics";
import Index from "./tutorial/6-useReducer/setup/Index";
import PropDrilling from "./tutorial/7-prop-drilling/setup/1-prop-drilling";
import ContextAPI from "./tutorial/8-useContext/setup/1-context-api";
import FetchExample from "./tutorial/9-custom-hooks/setup/1-fetch-example";
import PropTypeIndex from "./tutorial/10-prop-types/setup/index";

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
      
      <ShortCircuit />
      
      <ShowHide />
     
      <ControlledInputs />
       
      <UseRefBasics />
      

      <Index />
      

      <PropDrilling />
     
      <ContextAPI />
       

      <FetchExample />
      */}

      <PropTypeIndex />
    </div>
  );
}

export default App;
