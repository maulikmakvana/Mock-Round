import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { initialLeaves } from "../data/mockData";

function LeaveHistory() {
  const user = JSON.parse(localStorage.getItem("user"));

  const leaves =
    JSON.parse(localStorage.getItem("leaves")) ||
    initialLeaves;

  const myLeaves = leaves.filter(
    (leave) => leave.employeeId === user.id
  );

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? myLeaves
      : myLeaves.filter(
          (leave) => leave.status === filter
        );

  return (
    <div className="app">
      <Sidebar role="employee" />

      <main className="content">
        <Header title="My Leave History" />

        <select
          className="form-control filter-box"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

        <div className="card p-3 mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.type}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>

                  <td>
                    <StatusBadge status={leave.status} />
                  </td>

                  <td>
                    <Link to={`/leave/${leave.id}`}>
                      View
                    </Link>
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

export default LeaveHistory;