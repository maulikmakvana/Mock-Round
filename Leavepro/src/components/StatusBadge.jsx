function StatusBadge({ status }) {
  let className = "badge bg-warning";

  if (status === "Approved") {
    className = "badge bg-success";
  }

  if (status === "Rejected") {
    className = "badge bg-danger";
  }

  return <span className={className}>{status}</span>;
}

export default StatusBadge;