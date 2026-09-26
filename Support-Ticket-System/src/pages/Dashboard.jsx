
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";
import { getAllTickets } from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getAllTickets());
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const progress = tickets.filter((t) => t.status === "In Progress").length;
  const resolved = tickets.filter((t) => t.status === "Resolved").length;
  const closed = tickets.filter((t) => t.status === "Closed").length;
  const high = tickets.filter((t) => t.priority === "High").length;

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Dashboard" />

        <div className="cards">
          <div className="card">
            <h3>Total Tickets</h3>
            <h1>{total}</h1>
          </div>

          <div className="card">
            <h3>Open</h3>
            <h1>{open}</h1>
          </div>

          <div className="card">
            <h3>In Progress</h3>
            <h1>{progress}</h1>
          </div>

          <div className="card">
            <h3>Resolved</h3>
            <h1>{resolved}</h1>
          </div>

          <div className="card">
            <h3>Closed</h3>
            <h1>{closed}</h1>
          </div>

          <div className="card">
            <h3>High Priority</h3>
            <h1>{high}</h1>
          </div>
        </div>

        <div className="summary">
          <div className="summary-box">
            <h3>Status Summary</h3>
            <p>Open: {open}</p>
            <p>In Progress: {progress}</p>
            <p>Resolved: {resolved}</p>
            <p>Closed: {closed}</p>
          </div>

          <div className="summary-box">
            <h3>Priority Summary</h3>
            <p>High: {high}</p>
            <p>
              Medium:{" "}
              {tickets.filter((t) => t.priority === "Medium").length}
            </p>
            <p>
              Low:{" "}
              {tickets.filter((t) => t.priority === "Low").length}
            </p>
          </div>
        </div>

        <div className="table-box">
          <div className="table-title">
            <h3>Recent Tickets</h3>
            <Link to="/tickets">View All</Link>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tickets.slice(0, 5).map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.ticket_id}</td>
                  <td>{ticket.subject}</td>
                  <td>
                    <PriorityBadge priority={ticket.priority} />
                  </td>
                  <td>
                    <StatusBadge status={ticket.status} />
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

export default Dashboard;