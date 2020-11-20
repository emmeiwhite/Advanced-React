import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Change Title");
  const changeTitle = () => {
    if (title === "Change Title") {
      setTitle("Rock the World");
    } else {
      setTitle("Change Title");
    }
  };
  return (
    <React.Fragment>
      <p>{title}</p>
      <button onClick={changeTitle}>Change Title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
