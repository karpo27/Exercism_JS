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
  if (ticketId in tickets){
    if (tickets[ticketId] === null){
      return "not sold";
    } else {
      return "sold to " + tickets[ticketId];
    }
  } else {
    return "unknown ticket id";
  }
}

function simpleTicketStatus(tickets, ticketId) {
  if (ticketStatus(tickets, ticketId) == "sold to " + tickets[ticketId]){
    return tickets[ticketId];
  } else {
    return "invalid ticket !!!";
  }
}

function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

export {createVisitor, revokeTicket, ticketStatus, simpleTicketStatus, gtcVersion};
