import { Link, useNavigate } from "react-router-dom";

function Sidebar({ role }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h3>LeavePro</h3>

      {role === "employee" ? (
        <>
          <Link to="/employee">Dashboard</Link>
          <Link to="/apply-leave">Apply Leave</Link>
          <Link to="/leave-history">Leave History</Link>
          <Link to="/leave-balance">Leave Balance</Link>
        </>
      ) : (
        <>
          <Link to="/manager">Dashboard</Link>
          <Link to="/leave-requests">Leave Requests</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/departments">Departments</Link>
        </>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Sidebar;