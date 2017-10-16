import React from 'react';
import AppBar from 'material-ui/AppBar';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const ConvAppBar = ({onIconMenuClick}) => (
  <AppBar
    title="ESS"
    onLeftIconButtonTouchTap={onIconMenuClick}
  />
);

export default ConvAppBar;
