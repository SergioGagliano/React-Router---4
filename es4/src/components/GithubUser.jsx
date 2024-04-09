import React, { useState, useEffect } from "react";

export function GithubUser({ username }) {
  const [userData, setUserData] = useState([]);

  async function fetchUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return (
    <div>
      <h2>Utente Github </h2>
      <div>
        <img src={userData.avatar_url} alt="Avatar-img" />
      </div>
      <div>Name: {userData.name}</div>
      <div>Login: {userData.login}</div>
    </div>
  );
}