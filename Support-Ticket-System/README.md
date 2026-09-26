# Help Desk / Support Ticket System

A simple **Support Ticket Management System** built using React.js.

This project allows employees to create support tickets and support staff to manage, assign, search, filter and update tickets.

## Features

* Login with demo account
* Dashboard with ticket statistics
* Create new support ticket
* Auto-generate Ticket ID
* Ticket priority: Low, Medium, High
* Ticket status:

  * Open
  * In Progress
  * Resolved
  * Closed
* Assign ticket to support staff
* Search tickets by Ticket ID or Subject
* Filter tickets by Status
* Filter tickets by Priority
* Filter tickets by Assignee
* View ticket details
* Update ticket status
* Update ticket assignee
* Employees list
* Recent tickets on dashboard
* Responsive design for desktop and mobile
* LocalStorage used for saving ticket data
* Basic comments section

## Technologies Used

* React.js
* JavaScript ES6+
* React Hooks
* React Router DOM
* HTML
* CSS
* LocalStorage
* Vite

## Project Structure

src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatusBadge.jsx
│   └── PriorityBadge.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Tickets.jsx
│   ├── CreateTicket.jsx
│   ├── TicketDetails.jsx
│   └── Employees.jsx
│
├── services/
│   └── api.js
│
├── data/
│   └── mockData.js
│
├── App.jsx
├── main.jsx
└── index.css


## Demo Login

### Support Staff

Email: support@company.com
Password: 123456

### Employee
Email: employee@company.com
Password: 123456

## How to Run

### 1. Clone the project

git clone YOUR_GITHUB_REPOSITORY_URL


### 2. Open project folder

cd YOUR_PROJECT_FOLDER

### 3. Install packages

npm install

### 4. Start the project

npm run dev

### 5. Open in browser

Open the URL shown in the terminal, usually:

http://localhost:5173

## Main Pages

### Login

User can login using the demo credentials.

### Dashboard

Dashboard shows:

* Total Tickets
* Open Tickets
* In Progress Tickets
* Resolved Tickets
* Closed Tickets
* High Priority Tickets
* Status Summary
* Priority Summary
* Recent Tickets

### Tickets

The ticket page provides:

* Ticket list
* Search
* Status filter
* Priority filter
* Assignee filter
* View ticket details

### Create Ticket

User can create a new ticket with:

* Subject
* Description
* Priority
* Assigned Support Staff

After creating a ticket, the system automatically generates a Ticket ID and sets the status to **Open**.

### Ticket Details

The details page shows:

* Ticket ID
* Subject
* Description
* Priority
* Status
* Assigned employee
* Created date
* Updated date
* Status progress

User can also update:

* Ticket Status
* Assigned Support Staff

## Data Storage

This project uses **LocalStorage** for ticket data.

No separate backend is required for this practical project.

The initial ticket data is stored in:

src/data/mockData.js

## Ticket ID Example

New tickets are generated with IDs like:

TCK-1025
TCK-1026
TCK-1027

## Project Flow

Login
  ↓
Dashboard
  ↓
Tickets
  ├── Search / Filter
  └── Ticket Details
          ↓
     Update Status
     Assign Staff

Dashboard
  ↓
Create Ticket
  ↓
Ticket List

## Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

## Future Improvements

Some features that can be added later:

* Real backend API
* MongoDB database
* User authentication
* Ticket comments
* Email notifications
* Ticket status history
* Delete ticket
* Admin role
* Charts and reports

## Author

**Maulik Makvana**

React.js / Full Stack Web Development Student
