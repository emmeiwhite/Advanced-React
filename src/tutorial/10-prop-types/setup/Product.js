import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./../../../assets/default-image.jpeg";

/* --- We'll work with PropTypes ---*/
const Product = ({ name, image, price }) => {
  /* --- Awesome Techniques to deal with undefined object --- */
  const url = image && image.url;
  return (
    <article className="product">
      <p>{name}</p>
      <img src={url || defaultImage} alt={name} />
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Default Props | Whenever any prop for the Product Component is missing we will use our default value for smooth execution of the program. Alternate way to handle default Props is using || operator and && operator trickily
/* ---
Product.defaultProps = {
  name: "Random Name",
  price: 3.99,
  image: defaultImage,
};
---*/
export default Product;
