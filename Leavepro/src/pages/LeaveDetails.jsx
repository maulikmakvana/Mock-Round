import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { initialLeaves } from "../data/mockData";

function LeaveDetails() {
  const { id } = useParams();

  const leaves =
    JSON.parse(localStorage.getItem("leaves")) ||
    initialLeaves;

  const leave = leaves.find(
    (item) => item.id === Number(id)
  );

  if (!leave) {
    return <h3 className="m-5">Leave not found</h3>;
  }

  return (
    <div className="app">
      <Sidebar role="employee" />

      <main className="content">
        <Header title="Leave Details" />

        <div className="card p-4 mt-4">
          <h4>{leave.employeeName}</h4>

          <p>
            <b>Leave Type:</b> {leave.type}
          </p>

          <p>
            <b>Start Date:</b> {leave.startDate}
          </p>

          <p>
            <b>End Date:</b> {leave.endDate}
          </p>

          <p>
            <b>Total Days:</b> {leave.totalDays}
          </p>

          <p>
            <b>Reason:</b> {leave.reason}
          </p>

          <p>
            <b>Status:</b>{" "}
            <StatusBadge status={leave.status} />
          </p>

          <p>
            <b>Applied On:</b> {leave.appliedOn}
          </p>

          <p>
            <b>Approved By:</b>{" "}
            {leave.approvedBy || "Not approved"}
          </p>

          <Link
            to="/leave-history"
            className="btn btn-secondary"
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LeaveDetails;