export const clickIconMenu = () => ({
    type: 'CLICK_ICON_MENU'
});

export const seedFirebase = () => ({
  type: 'SEED_FIREBASE'
});

export const selectIndex = (index) => ({
  type: 'SELECT_INDEX',
  index: index,
});

export const fetchTickets = () => (
  {
    type: 'FETCH_TICKETS',
  }
);
