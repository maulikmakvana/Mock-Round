
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (password !== "123456") {
      setError("Wrong password");
      return;
    }

    if (
      email !== "support@company.com" &&
      email !== "employee@company.com"
    ) {
      setError("Use demo account");
      return;
    }

    const role =
      email === "support@company.com" ? "support" : "employee";

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        role
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={login}>
        <h1>HelpDesk</h1>
        <p>Support Ticket Management</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>

        <div className="demo">
          <b>Demo Account</b>
          <p>support@company.com</p>
          <p>Password: 123456</p>
        </div>
      </form>
    </div>
  );
}



export default Login;