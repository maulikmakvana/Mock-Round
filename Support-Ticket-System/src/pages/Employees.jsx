import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getAllUsers } from "../services/api";

function Employees() {
  const users = getAllUsers();

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Employees" />

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
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