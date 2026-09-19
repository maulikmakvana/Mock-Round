import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveHistory from "./pages/LeaveHistory";
import LeaveBalance from "./pages/LeaveBalance";
import LeaveDetails from "./pages/LeaveDetails";
import LeaveRequests from "./pages/LeaveRequests";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/employee" element={<EmployeeDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />

      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/leave-history" element={<LeaveHistory />} />
      <Route path="/leave-balance" element={<LeaveBalance />} />
      <Route path="/leave/:id" element={<LeaveDetails />} />

      <Route path="/leave-requests" element={<LeaveRequests />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  );
}

export default App;