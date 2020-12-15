import { useState, useEffect, useCallback } from "react";

// export const useFetch = (url) => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   const getProducts = useCallback(async () => {
//     const response = await fetch(url);
//     const products = await response.json();
//     setProducts(products);
//     setLoading(false);
//   }, [url]);

//   useEffect(() => {
//     getProducts();
//   }, [url, getProducts]);
//   return { loading, products };
// };

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    try {
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } else {
        throw new Error("FETCH: Failed ");
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, error, products };
};
