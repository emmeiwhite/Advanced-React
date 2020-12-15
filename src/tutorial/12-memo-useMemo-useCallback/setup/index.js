import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";
import { FaCartArrowDown } from "react-icons/fa";

import "./useMemo.css";
const url = "https://course-api.netlify.app/api/javascript-store-products";

const customImage =
  "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg";
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
  const [cart, setCart] = useState(0);

  /* ---  updateCart it is passed as prop to the Product component (using prop-drilling) everytime our count value changes and this component gets re-rendered. This updateCart also gets created again and again. And react feels that the updateCart function is changing every time and new updateCart props as drilled down every time. That's why the Product component re-renders | General Rule: "whenever state or prop changes, component is re-rendered"---*/

  const updateCart = () => {
    setCart((prevCart) => {
      cart = prevCart + 1;
      return cart;
    });
  };

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
      <h1 className="count">Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <ProductList products={products} updateCart={updateCart} />
      {/* <TestReRender testData={testData} /> */}

      <div className="cart">
        <span className="cart__value">{cart}</span>
        <FaCartArrowDown className="cart__icon" />
        <span>Cart</span>
      </div>
    </>
  );
};

/* --- 
We see whenever the Parent Component MemoUseMemoUseCallBack re-renders, the child component TestReRender is also re-rendering.
Which in turn means that if TestReRender Component also has it's own child components in it those will also re-render 
--- */

// Let's do our React.memo() on more time while creating small App
const ProductList = ({ products, updateCart }) => {
  useEffect(() => {
    console.log("Product List | useEffect");
  });
  return (
    <div className="productList">
      {products.map((product) => (
        <Product key={product.id} {...product} updateCart={updateCart} />
      ))}
    </div>
  );
};

const Product = ({ fields, updateCart }) => {
  useEffect(() => {
    console.count("Product Invoked");
  });
  const { company, image, price } = fields;
  const url = image.url || customImage;
  return (
    <div className="product">
      <img src={url} alt="product image" className="product__image" />
      <h3>{company || "Company Name"}</h3>
      <h4>$ {price || 3.99}</h4>
      <button onClick={updateCart}>Add to Cart</button>
    </div>
  );
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
