export const users = [
    {
        id: 1,
        name: "Maulik Makvana",
        email: "employee@company.com",
        password: "123456",
        role: "employee",
        department: "IT",
        status: "active"
    },
    {
        id: 2,
        name: "Manager",
        email: "manager@company.com",
        password: "123456",
        role: "manager",
        department: "IT",
        status: "active"
    }
];

export const leaveTypes = [
    { id: 1, name: "Casual Leave", code: "CL", total: 7 },
    { id: 2, name: "Sick Leave", code: "SL", total: 5 },
    { id: 3, name: "Earned Leave", code: "EL", total: 10 },
    { id: 4, name: "Privilege Leave", code: "PL", total: 5 }
];

export const departments = [
    { id: 1, name: "IT", employees: 5 },
    { id: 2, name: "HR", employees: 3 },
    { id: 3, name: "Sales", employees: 6 }
];

export const initialLeaves = [
    {
        id: 1,
        employeeId: 1,
        employeeName: "Maulik Makvana",
        type: "Casual Leave",
        code: "CL",
        startDate: "2026-09-10",
        endDate: "2026-09-11",
        totalDays: 2,
        reason: "Personal work",
        status: "Approved",
        appliedOn: "2026-09-05",
        approvedBy: "Manager"
    },
    {
        id: 2,
        employeeId: 1,
        employeeName: "Maulik Makvana",
        type: "Sick Leave",
        code: "SL",
        startDate: "2026-09-20",
        endDate: "2026-09-21",
        totalDays: 2,
        reason: "Not feeling well",
        status: "Pending",
        appliedOn: "2026-09-18",
        approvedBy: ""
    }
];