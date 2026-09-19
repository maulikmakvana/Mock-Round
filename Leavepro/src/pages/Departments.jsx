import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { departments } from "../data/mockData";

function Departments() {
  return (
    <div className="app">
      <Sidebar role="manager" />

      <main className="content">
        <Header title="Departments" />

        <div className="row mt-4">
          {departments.map((department) => (
            <div
              className="col-md-4 mb-3"
              key={department.id}
            >
              <div className="card p-3">
                <h5>{department.name}</h5>

                <p>
                  Employees: {department.employees}
                </p>

                <span className="badge bg-success">
                  {department.status || "active"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Departments;