import { users, tickets as defaultTickets } from "../data/mockData";

const getTickets = () => {
  const data = localStorage.getItem("tickets");

  if (data) {
    return JSON.parse(data);
  }

  localStorage.setItem("tickets", JSON.stringify(defaultTickets));
  return defaultTickets;
};

export const getAllTickets = () => {
  return getTickets();
};

export const getAllUsers = () => {
  return users;
};

export const getTicketById = (id) => {
  const tickets = getTickets();
  return tickets.find((ticket) => ticket.id === Number(id));
};

export const createTicket = (ticket) => {
  const tickets = getTickets();

  const newTicket = {
    ...ticket,
    id: Date.now(),
    ticket_id: "TCK-" + (1025 + tickets.length + 1),
    status: "Open",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const updatedTickets = [newTicket, ...tickets];

  localStorage.setItem("tickets", JSON.stringify(updatedTickets));

  return newTicket;
};

export const updateTicket = (id, data) => {
  const tickets = getTickets();

  const updatedTickets = tickets.map((ticket) => {
    if (ticket.id === Number(id)) {
      return {
        ...ticket,
        ...data,
        updated_at: new Date().toISOString()
      };
    }

    return ticket;
  });

  localStorage.setItem("tickets", JSON.stringify(updatedTickets));

  return updatedTickets.find((ticket) => ticket.id === Number(id));
};