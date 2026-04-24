import { useState } from "react";
import axios from "axios";
import AuthLayout from "./AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async () => {
    const res = await axios.post("http://localhost:8080/login", {
      email,
      password
    });

    alert(res.data);

    if (res.data === "Login Successful") {
      window.location.href = "/dashboard";
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your journey"
    >
      <div className="auth-form">

        <div className="search-input">
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="search-input">
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="btn-search" onClick={handlelogin}>
          Login
        </button>

      </div>
    </AuthLayout>
  );
}

export default Login;