import React, { useState, useEffect } from "react";

// We'll Mount and UnMount a component and clean up our code of UnMounting component
const ShowHide = () => {
  const [isMounted, setIsMounted] = useState(true);
  return (
    <div>
      <button className="btn" onClick={() => setIsMounted(!isMounted)}>
        show/hide
      </button>
      {isMounted && <Item />}
    </div>
  );
};

// We'll show window width on resize and also need to clean up our code
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });

    //componentWillUnmount ||size Effects removed
    return () => {
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    };
  }, []);
  return (
    <main>
      <h4>Window</h4>
      <h5>{size} px</h5>
    </main>
  );
};
export default ShowHide;
