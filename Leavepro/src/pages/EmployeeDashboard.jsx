import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { initialLeaves } from "../data/mockData";

function EmployeeDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const leaves = JSON.parse(
    localStorage.getItem("leaves")
  ) || initialLeaves;

  const myLeaves = leaves.filter(
    (leave) => leave.employeeId === user?.id
  );

  const used = myLeaves
    .filter((leave) => leave.status === "Approved")
    .reduce((sum, leave) => sum + leave.totalDays, 0);

  const pending = myLeaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  return (
    <div className="app">
      <Sidebar role="employee" />

      <main className="content">
        <Header title="Employee Dashboard" />

        <h3>Welcome, {user?.name}</h3>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card-box">
              <h6>Total Leaves</h6>
              <h2>27</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-box">
              <h6>Used Leaves</h6>
              <h2>{used}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-box">
              <h6>Pending Requests</h6>
              <h2>{pending}</h2>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to="/apply-leave"
            className="btn btn-primary me-2"
          >
            Apply Leave
          </Link>

          <Link
            to="/leave-history"
            className="btn btn-outline-primary"
          >
            Leave History
          </Link>
        </div>

        <div className="card mt-4 p-3">
          <h5>Recent Leave Requests</h5>

          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Dates</th>
                <th>Days</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {myLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.type}</td>
                  <td>
                    {leave.startDate} - {leave.endDate}
                  </td>
                  <td>{leave.totalDays}</td>
                  <td>
                    <StatusBadge status={leave.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default EmployeeDashboard;