function StatusBadge({ status }) {
  return (
    <span className={"badge status-" + status.toLowerCase().replace(" ", "-")}>
      {status}
    </span>
  );fd
}

export default StatusBadge;