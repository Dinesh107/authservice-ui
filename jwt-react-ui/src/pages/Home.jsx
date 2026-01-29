import { useEffect, useState } from "react";
import { getHome } from "../api/authService";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHome()
      .then((res) => setMessage(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
