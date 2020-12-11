import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./../../../assets/default-image.jpeg";

/* --- We'll work with PropTypes ---*/
const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <p>Name: {name}</p>
      <img src={image.url} alt={name} />
      <p>Price:$ {price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Default Props | Whenever any prop for the Product Component is missing we will use our default value for smooth execution of the program
Product.defaultProps = {
  name: "Random Name",
  price: 3.99,
  image: defaultImage,
};
export default Product;
