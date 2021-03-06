import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./MemoUseCallBackUseMemo.css";

const myProducts = [
  { id: 1, name: "laptop", price: 123 },
  { id: 2, name: "desktop", price: 45 },
  { id: 3, name: "cup", price: 80 },
];

const highestPricedProduct = (products) => {
  console.log("Highest Priced Product Function Invoked");
  const highestPrice = products.reduce((total, product) => {
    const price = product.price;
    if (price > total) {
      total = price;
    }

    return total;
  }, 0);

  return highestPrice;
};

export default function MemoUseCallBackUseMemo() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(myProducts);

  /*--- with useCallback the callback function will only update when the products change---*/
  const addProduct = useCallback(
    (productName) => {
      const product = {
        id: new Date().getTime().toString(),
        name: productName,
      };

      setProducts([...products, product]);
    },
    [products]
  );

  //   Memoizing value
  const highestPriced = useMemo(() => highestPricedProduct(products), [
    products,
  ]);
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <ChildComponent products={products} addProduct={addProduct} />

      {/* Whenever this component re-renders the below function also gets invoked. We want this to invoke only when there is a change in the products being passed. We have used useMemo now, which makes sure React memoizes the value of products and only when the products change the highestPricedProduct() function gets invoked */}
      <p>Highest Priced Product {highestPriced}</p>
    </div>
  );
}
/*--- In the above setup: Whenever the state variable count increases, 
    MemoUseCallBackUseMemo component get's re-rendered.Now, since ChildComponent is used inside this component, it also gets re-rendered even when no prop change happens in the Component. products passed stays in their original state. The solution is React.memo()
---*/

const ChildComponent = React.memo(({ products, addProduct }) => {
  const [product, setProduct] = useState("");
  useEffect(() => {
    console.count("ChildComponent");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      addProduct(product);
      setProduct("");
    }
  };
  return (
    <div
      style={{ marginTop: "2rem", border: "1px solid #000", padding: "1rem" }}
    >
      <h4>Child Component</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quas.
      </p>

      <div className="products-wrapper">
        {products.length > 0 &&
          products.map((product) => {
            return <div key={product.id}>{product.name}</div>;
          })}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
});
