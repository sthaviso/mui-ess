export default function agent(state = {}, action) {
  switch (action.type) {
    case 'CLICK_ICON_MENU':
      return Object.assign({}, state, {
        open: !state.open
      });
    case 'SELECT_INDEX':
      return Object.assign({}, state, {
        selectedIndex: action.index
      })
    default:
      return {
        loggedIn : true,
        open: false,
        selectedIndex: -1
      };
  }
}
