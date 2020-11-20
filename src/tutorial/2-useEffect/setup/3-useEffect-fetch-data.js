import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
  };

  // componentDidMount() : We cannot use async-await with useEffect()
  useEffect(() => {
    console.log("useEffect");
    getUsers();
  }, []);

  return (
    <main>
      {console.log("render")}
      <h3>Fetching Data | useEffect()</h3>
      {users.length > 0 ? (
        <section className="users-wrapper">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt="user image" />
              <p>{user.login}</p>
            </div>
          ))}
        </section>
      ) : (
        <h4>loading ...</h4>
      )}
    </main>
  );
};
export default UseEffectFetchData;
