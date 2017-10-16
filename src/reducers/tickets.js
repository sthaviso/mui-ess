export default function tickets(state = [], action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.tickets;
    case 'CLICK_TICKET':
      debugger;
      return state.map(ticket => {
          if (ticket.id === action.id) {
            ticket.clicked = true;
            ticket.unreadMessagesCount = 0;
          } else {
            ticket.clicked = false;
          }
          return ticket;
        });
    // initial state
    default:
      return state;
  }
}
