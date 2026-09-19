import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { users } from "../data/mockData";

function Employees() {
  return (
    <div className="app">
      <Sidebar role="manager" />

      <main className="content">
        <Header title="Employees" />

        <div className="card p-3 mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {users
                .filter((user) => user.role === "employee")
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.department}</td>
                    <td>{user.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Employees;