import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";

// every time props or state changes, component re-renders, the child inside the component also re-renders
const testData = [
  { id: 1, data: "data1" },
  { id: 2, data: "data2" },
  { id: 3, data: "data3" },
  { id: 4, data: "data4" },
];

const MemoUseMemoUseCallBack = () => {
  const { products, loading, error } = useFetch(url);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent useEffect()");
  }, [count]);

  if (loading) {
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Error: No data available</h3>;
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <ProductList products={products} />
      {/* <TestReRender testData={testData} /> */}
    </>
  );
};

/* --- 
We see whenever the Parent Component MemoUseMemoUseCallBack re-renders, the child component TestReRender is also re-rendering.
Which in turn means that if TestReRender Component also has it's own child components in it those will also re-render 
--- */

// Let's do our React.memo() on more time while creating small App
const ProductList = ({ products }) => products.map((product) => <Product />);

const Product = () => {
  return <p>single product</p>;
};
export default MemoUseMemoUseCallBack;

/* --- ONLY for TESTING Purpose React.memo() --- */
/* --- CONCLUSION: We can clearly see that even if the new  props are not passed to the  <TestReRender /> Component on line-22, The component is still re-rendered along with it's Children components also. But we don't want this behavior in our Code. We'll do a Computer Science Technique call Memoizing in this case. 
We'll use React.memo() and wrap our TestReRender Component definition in it
---*/

const TestReRender = ({ testData }) => {
  // React.memo is a caching technique. Until testData prop doesn't change, there will be no re-render of the TestReRender Component anymore. This really is an awesome technique but behind the scenes computer has to do additional computations to do Memoization
  useEffect(() => {
    console.count("Test ReRendered| useEffect");
  });
  return (
    <>
      <h3>Child Component</h3>
      <p>
        No prop is passed to me. I want to check whether I will be re-rendered
        when my Parent Component Re-renders
      </p>

      {testData.map((data) => (
        <SubChild key={data.id} />
      ))}
    </>
  );
};

const SubChild = () => {
  useEffect(() => {
    console.count("SubChild Rendered | useEffect");
  });
  return (
    <div>
      <h3>Sub-child</h3>
    </div>
  );
};
