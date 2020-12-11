import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <button>
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default Error;
