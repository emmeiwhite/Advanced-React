import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    const response = await fetch(url);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]); // Whenever url updates useEffect() is invoked

  return { loading, products, error };
};

/*--- IMPORTANT POINT --- */
// We cannot use React-Hooks in normal function.
// We can use Hooks in React Component or in Custom Hooks
