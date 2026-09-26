
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { createTicket, getAllUsers } from "../services/api";

function CreateTicket() {
  const navigate = useNavigate();

  const users = getAllUsers();

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const submitTicket = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const employee = users.find((u) => u.email === user.email);

    createTicket({
      subject,
      description,
      priority,
      assigned_to: assignedTo ? Number(assignedTo) : null,
      created_by: employee ? employee.id : 3
    });

    alert("Ticket created successfully!");

    navigate("/tickets");
  };

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Create Ticket" />

        <div className="form-box">
          <form onSubmit={submitTicket}>
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter ticket subject"
              required
            />

            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter problem description"
              rows="5"
              required
            />

            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <label>Assign To</label>
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

            <button type="submit">Create Ticket</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateTicket;