import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>HelpDesk</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tickets">Tickets</Link>
      <Link to="/create-ticket">Create Ticket</Link>
      <Link to="/employees">Employees</Link>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Sidebar;