import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { initialLeaves } from "../data/mockData";

function ManagerDashboard() {
  const leaves =
    JSON.parse(localStorage.getItem("leaves")) ||
    initialLeaves;

  const pending = leaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  const approved = leaves.filter(
    (leave) => leave.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    (leave) => leave.status === "Rejected"
  ).length;

  return (
    <div className="app">
      <Sidebar role="manager" />

      <main className="content">
        <Header title="Manager Dashboard" />

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card-box">
              <h6>Pending Requests</h6>
              <h2>{pending}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-box">
              <h6>Approved</h6>
              <h2>{approved}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-box">
              <h6>Rejected</h6>
              <h2>{rejected}</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManagerDashboard;