import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/mockData";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "manager") {
      navigate("/manager");
    } else {
      navigate("/employee");
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={login}>
        <h2>LeavePro</h2>
        <p>Employee Leave Management</p>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">
          Login
        </button>

        <div className="demo-login">
          <p>Employee: employee@company.com</p>
          <p>Manager: manager@company.com</p>
          <p>Password: 123456</p>
        </div>
      </form>
    </div>
  );
}

export default Login;