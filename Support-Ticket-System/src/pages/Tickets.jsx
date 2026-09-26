
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";
import { getAllTickets, getAllUsers } from "../services/api";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [assignee, setAssignee] = useState("");

  useEffect(() => {
    setTickets(getAllTickets());
    setUsers(getAllUsers());
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const searchMatch =
      ticket.ticket_id.toLowerCase().includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(search.toLowerCase());

    const statusMatch = status === "" || ticket.status === status;
    const priorityMatch =
      priority === "" || ticket.priority === priority;
    const assigneeMatch =
      assignee === "" || String(ticket.assigned_to) === assignee;

    return (
      searchMatch &&
      statusMatch &&
      priorityMatch &&
      assigneeMatch
    );
  });

  const getUserName = (id) => {
    const user = users.find((u) => u.id === id);
    return user ? user.name : "Not Assigned";
  };

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Tickets" />

        <div className="filter-box">
          <input
            placeholder="Search Ticket ID or Subject"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">All Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          >
            <option value="">All Assignees</option>

            {users
              .filter((u) => u.role === "support")
              .map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
        </div>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.ticket_id}</td>

                  <td>{ticket.subject}</td>

                  <td>
                    <PriorityBadge priority={ticket.priority} />
                  </td>

                  <td>
                    <StatusBadge status={ticket.status} />
                  </td>

                  <td>{getUserName(ticket.assigned_to)}</td>

                  <td>
                    {new Date(ticket.created_at).toLocaleDateString()}
                  </td>

                  <td>
                    <Link
                      className="view-btn"
                      to={`/tickets/${ticket.id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}

              {filteredTickets.length === 0 && (
                <tr>
                  <td colSpan="7">No tickets found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Tickets;