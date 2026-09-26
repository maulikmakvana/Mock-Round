import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";
import {
  getAllUsers,
  getTicketById,
  updateTicket
} from "../services/api";

function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [users, setUsers] = useState([]);

  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    const data = getTicketById(id);

    setTicket(data);
    setUsers(getAllUsers());

    if (data) {
      setStatus(data.status);
      setAssignedTo(data.assigned_to || "");
    }
  }, [id]);

  if (!ticket) {
    return <h2>Ticket not found</h2>;
  }

  const saveChanges = () => {
    const updated = updateTicket(id, {
      status,
      assigned_to: assignedTo ? Number(assignedTo) : null
    });

    setTicket(updated);

    alert("Ticket updated successfully!");
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);

    return user ? user.name : "Not Assigned";
  };

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Ticket Details" />

        <div className="details-box">
          <div className="detail-header">
            <h2>{ticket.ticket_id}</h2>

            <div>
              <PriorityBadge priority={ticket.priority} />
              <StatusBadge status={ticket.status} />
            </div>
          </div>

          <hr />

          <h2>{ticket.subject}</h2>

          <p className="description">
            {ticket.description}
          </p>

          <div className="details-grid">
            <div>
              <b>Created Date</b>
              <p>
                {new Date(ticket.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <b>Updated Date</b>
              <p>
                {new Date(ticket.updated_at).toLocaleString()}
              </p>
            </div>

            <div>
              <b>Assigned To</b>
              <p>{getUserName(ticket.assigned_to)}</p>
            </div>
          </div>

          <h3>Status Progress</h3>

          <div className="progress">
            <span className={ticket.status === "Open" ? "active" : ""}>
              Open
            </span>

            <span
              className={
                ticket.status === "In Progress" ? "active" : ""
              }
            >
              In Progress
            </span>

            <span
              className={
                ticket.status === "Resolved" ? "active" : ""
              }
            >
              Resolved
            </span>

            <span
              className={
                ticket.status === "Closed" ? "active" : ""
              }
            >
              Closed
            </span>
          </div>

          <div className="update-box">
            <h3>Update Ticket</h3>

            <label>Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>

            <label>Assign Employee</label>

            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Not Assigned</option>

              {users
                .filter((u) => u.role === "support")
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>

            <button onClick={saveChanges}>
              Update Ticket
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/tickets")}
            >
              Back to Tickets
            </button>
          </div>

          <div className="comments">
            <h3>Comments</h3>
            <p>Comments feature can be added here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetails;