import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { leaveTypes, initialLeaves } from "../data/mockData";
import { getUsedLeaves } from "../utils/leaveUtils";

function LeaveBalance() {
  const user = JSON.parse(localStorage.getItem("user"));

  const leaves =
    JSON.parse(localStorage.getItem("leaves")) ||
    initialLeaves;

  const myLeaves = leaves.filter(
    (leave) => leave.employeeId === user.id
  );

  return (
    <div className="app">
      <Sidebar role="employee" />

      <main className="content">
        <Header title="Leave Balance" />

        <div className="row mt-4">
          {leaveTypes.map((item) => {
            const used = getUsedLeaves(
              myLeaves,
              item.name
            );

            const remaining = item.total - used;

            return (
              <div className="col-md-6 mb-3" key={item.id}>
                <div className="card p-3">
                  <h5>
                    {item.name} ({item.code})
                  </h5>

                  <p>
                    Used: {used} / {item.total}
                  </p>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${(used / item.total) * 100}%`
                      }}
                    >
                      {remaining} Remaining
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="alert alert-info">
          Leave balance updates after manager approval.
        </div>
      </main>
    </div>
  );
}

export default LeaveBalance;