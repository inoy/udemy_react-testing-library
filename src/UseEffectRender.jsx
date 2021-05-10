import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectRender = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (isMounted) setUser(response.data);
    })();
    return () => (isMounted = false);
  }, []);

  return (
    <>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </>
  );
};

export default UseEffectRender;
