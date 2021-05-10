import React, { useState } from "react";
import axios from "axios";

function MockServer() {
  const [clicked, setClicked] = useState(false);
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  const fetchUser = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        const { username } = response.data;
        setUserName(username);
        setClicked(true);
      })
      .catch(() => setError("Fetching was failed."));
  };

  const buttonText = clicked ? "Loaded" : "Start Fetch";

  return (
    <>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </>
  );
}

export default MockServer;
