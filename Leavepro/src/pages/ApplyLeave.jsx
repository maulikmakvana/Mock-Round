import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { leaveTypes, initialLeaves } from "../data/mockData";
import { calculateDays } from "../utils/leaveUtils";

function ApplyLeave() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [halfDay, setHalfDay] = useState(false);
  const [error, setError] = useState("");

  const submitLeave = (e) => {
    e.preventDefault();

    if (!type || !startDate || !endDate || !reason) {
      setError("Please fill all required fields");
      return;
    }

    if (endDate < startDate) {
      setError("End date cannot be earlier than start date");
      return;
    }

    let totalDays = calculateDays(startDate, endDate);

    if (halfDay) {
      totalDays = totalDays - 0.5;
    }

    const oldLeaves =
      JSON.parse(localStorage.getItem("leaves")) ||
      initialLeaves;

    const selectedType = leaveTypes.find(
      (item) => item.id === Number(type)
    );

    const newLeave = {
      id: Date.now(),
      employeeId: user.id,
      employeeName: user.name,
      type: selectedType.name,
      code: selectedType.code,
      startDate,
      endDate,
      totalDays,
      reason,
      status: "Pending",
      appliedOn: new Date().toISOString().slice(0, 10),
      approvedBy: ""
    };

    localStorage.setItem(
      "leaves",
      JSON.stringify([...oldLeaves, newLeave])
    );

    alert("Leave applied successfully!");

    navigate("/leave-history");
  };

  return (
    <div className="app">
      <Sidebar role="employee" />

      <main className="content">
        <Header title="Apply Leave" />

        <div className="card p-4 mt-4">
          <form onSubmit={submitLeave}>
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <label>Leave Type *</label>

            <select
              className="form-control mb-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Leave Type</option>

              {leaveTypes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <label>Start Date *</label>

            <input
              type="date"
              className="form-control mb-3"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label>End Date *</label>

            <input
              type="date"
              className="form-control mb-3"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <label>Reason *</label>

            <textarea
              className="form-control mb-3"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={halfDay}
                onChange={(e) =>
                  setHalfDay(e.target.checked)
                }
              />

              <label className="form-check-label">
                Half Day
              </label>
            </div>

            <button className="btn btn-primary">
              Apply Leave
            </button>

            <button
              type="reset"
              className="btn btn-secondary ms-2"
            >
              Reset
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ApplyLeave;