import React from "react";
import Product from "./Product";
import { useFetch } from "./../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const PropTypeIndex = () => {
  const { loading, error, products } = useFetch(url);
  console.log(products);
  if (loading) {
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Error: No Data Available</h3>;
  }

  return (
    <div>
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </div>
  );
};

export default PropTypeIndex;
