import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleRegister = async () => {
    try {
      // const response = await axios.post("http://localhost:5000/api/user/v1/register", {
      const response = await axios.post("http://13.51.193.236:5000/api/user/v1/register", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful");
        navigate("/"); // Redirect to login page after registration
      }
    } catch (error) {
      alert(error.response ? error.response.data.error : "Registration failed");
    }
    setUsername('')
    setPassword('')
    setEmail('')
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      <button className="btn" onClick={handleRegister}>Register</button>
      <p><Link to="/" className="link">login</Link></p>

    </div>
  );
}

export default Register;
