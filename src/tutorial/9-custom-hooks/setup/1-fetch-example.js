import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

/* --- Making use of Custom Hook named useFetch() within FetchExample --- */
const FetchExample = () => {
  const { loading, error, products } = useFetch();
  if (error) {
    return <h2>Error ...</h2>;
  }

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchExample;
