import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";

// every time props or state changes, component re-renders, the child inside the component also re-renders

const MemoUseMemoUseCallBack = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent useEffect()");
  }, [count]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      {/* <BigList products={products} /> */}
      <TestReRender />
    </>
  );
};

/* --- 
We see whenever the Parent Component MemoUseMemoUseCallBack re-renders, the child component TestReRender is also re-rendering.
Which in turn means that if TestReRender Component also has it's own child components in it those will also re-render
--- */

const testData = [
  { id: 1, data: "data1" },
  { id: 2, data: "data2" },
  { id: 3, data: "data3" },
  { id: 4, data: "data4" },
];

const TestReRender = () => {
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
    console.log("SubChild Rendered | useEffect");
  });
  return (
    <div>
      <h3>Sub-child</h3>
    </div>
  );
};

/* --- CONCLUSION: We can clearly see that even if the new props are not passed to the  <TestReRender /> Component on line-22, The component is still re-rendered along with it's Children components also. But we don't want this behavior in our Code. We'll do a Computer Science Technique call Memoizing in this case. 
We'll use React.memo() and wrap our TestReRender Component definition in it
---*/

const BigList = ({ products }) => {
  useEffect(() => {
    console.log("Big List Rendered");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
};

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default MemoUseMemoUseCallBack;
