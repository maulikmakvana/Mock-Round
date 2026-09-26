import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import Employees from "./pages/Employees";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/tickets" element={<Tickets />} />

      <Route
        path="/create-ticket"
        element={<CreateTicket />}
      />

      <Route
        path="/tickets/:id"
        element={<TicketDetails />}
      />

      <Route path="/employees" element={<Employees />} />

      <Route
        path="*"
        element={<Navigate to="/dashboard" />}
      />
    </Routes>
  );
}

export default App;