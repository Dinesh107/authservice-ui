import { useState } from "react";
import { signup } from "../api/authService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    await signup({ username, password });
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username"
        onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
