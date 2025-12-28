import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("Login success");
      setIsAuthenticated(true);
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="center">
      <h2>Login</h2>
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
