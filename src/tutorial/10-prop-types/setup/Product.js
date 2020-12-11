import React from "react";
import PropTypes from "prop-types";

/* --- We'll work with PropTypes ---*/
const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <p>Name: {name}</p>
      <p>Image: {image.url}</p>
      <p>Price: {price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
