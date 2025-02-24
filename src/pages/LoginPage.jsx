import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // const response = await axios.post("http://13.51.193.236:5000//api/user/v1/login", {
      const response = await axios.post("http://13.51.193.236:5000/api/user/v1/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Store token in local storage
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      alert(error.response ? error.response.data.error : "Login failed");
    }
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      <button className="btn" onClick={handleLogin}>Login</button>
       <p><Link to="/register" className="link">register</Link></p>
    </div>
  );
}

export default Login;
