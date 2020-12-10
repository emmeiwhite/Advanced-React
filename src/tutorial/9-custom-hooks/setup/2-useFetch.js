import { useState, useEffect } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    const response = await fetch(
      "https://course-api.com/javascript-store-products"
    );
    try {
      if (response.status >= 200 && response.status < 300) {
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } else {
        throw new Error("Error: Fetch call resulted in error ");
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, products, error };
};

/*--- IMPORTANT POINT --- */
// We cannot use React-Hooks in normal function.
// We can use Hooks in React Component or in Custom Hooks
