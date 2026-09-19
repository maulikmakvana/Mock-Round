export const calculateDays = (start, end) => {
  if (!start || !end) return 0;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const difference = endDate - startDate;

  return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
};

export const getUsedLeaves = (leaves, type) => {
  return leaves
    .filter(
      (leave) =>
        leave.type === type && leave.status === "Approved"
    )
    .reduce((total, leave) => total + leave.totalDays, 0);
};