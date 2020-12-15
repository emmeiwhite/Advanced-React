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

// We
const TestReRender = () => {
  useEffect(() => {
    console.log("Test | useEffect");
  });
  return (
    <>
      <h3>Child Component</h3>
      <p>
        No prop is passed to me. I want to check whether I will be re-rendered
        when my Parent Component Re-renders
      </p>
    </>
  );
};
const BigList = ({ products }) => {
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
