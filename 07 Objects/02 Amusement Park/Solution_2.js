function createVisitor(name, age, ticketId) {
  return {
    'name': name,
    'age': age,
    'ticketId': ticketId
  };
}

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

function ticketStatus(tickets, ticketId) {
  return ticketId in tickets ? 
    tickets[ticketId] === null ? "not sold" 
     : "sold to " + tickets[ticketId]
    : "unknown ticket id"
}

function simpleTicketStatus(tickets, ticketId) {
  return ticketStatus(tickets, ticketId) == "sold to " + tickets[ticketId] ? tickets[ticketId] 
    : "invalid ticket !!!"
}

function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

export {createVisitor, revokeTicket, ticketStatus, simpleTicketStatus, gtcVersion};
