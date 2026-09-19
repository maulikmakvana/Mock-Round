import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { initialLeaves } from "../data/mockData";

function LeaveRequests() {
  const [leaves, setLeaves] = useState(
    JSON.parse(localStorage.getItem("leaves")) ||
      initialLeaves
  );

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const updateStatus = (id, newStatus) => {
    const updated = leaves.map((leave) =>
      leave.id === id
        ? {
            ...leave,
            status: newStatus,
            approvedBy: "Manager"
          }
        : leave
    );

    setLeaves(updated);

    localStorage.setItem(
      "leaves",
      JSON.stringify(updated)
    );
  };

  const filtered = leaves.filter((leave) => {
    const matchSearch =
      leave.employeeName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      leave.type
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || leave.status === status;

    return matchSearch && matchStatus;
  });

  return (
    <div className="app">
      <Sidebar role="manager" />

      <main className="content">
        <Header title="Leave Requests" />

        <div className="row mt-3">
          <div className="col-md-8">
            <input
              className="form-control"
              placeholder="Search employee or leave type"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <div className="card p-3 mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.employeeName}</td>

                  <td>{leave.type}</td>

                  <td>
                    {leave.startDate} - {leave.endDate}
                  </td>

                  <td>
                    <StatusBadge status={leave.status} />
                  </td>

                  <td>
                    <Link
                      to={`/leave/${leave.id}`}
                      className="btn btn-sm btn-info me-1"
                    >
                      View
                    </Link>

                    {leave.status === "Pending" && (
                      <>
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() =>
                            updateStatus(
                              leave.id,
                              "Approved"
                            )
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            updateStatus(
                              leave.id,
                              "Rejected"
                            )
                          }
                        >
                          Reject
                        </button>
                      </>
                    )}
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

export default LeaveRequests;