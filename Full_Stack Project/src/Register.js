import { useState } from "react";
import axios from "axios";
import AuthLayout from "./AuthLayout";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:8080/register", {
      email,
      password
    });

    alert(res.data);
    window.location.href = "/";
  };

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Start your career journey today"
    >
      <div className="auth-form">

        <div className="search-input">
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="search-input">
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="btn-search" onClick={handleRegister}>
          Register
        </button>

      </div>
    </AuthLayout>
  );
}

export default Register;