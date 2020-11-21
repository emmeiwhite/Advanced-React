import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // componentDidMount
  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error("Could not fetch Data: 404");
        }
      })
      .then((data) => {
        setPerson(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // conditional rendering
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: Could not load the data</p>;
  }

  return (
    <main>
      <article>
        <img
          src={person.avatar_url}
          alt="Quincy Larsen"
          style={{ borderRadius: "50%" }}
        />
        <p>{person.login}</p>
        <p>{person.company}</p>
      </article>
    </main>
  );
};

export default MultipleReturns;
