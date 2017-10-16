import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {MenuItem} from 'material-ui/Menu'
import { Link } from 'react-router-dom'

const ConvDrawer = ({open, toggleDrawer}) => (
  <Drawer
    docked={true}
    width={300}
    onRequestChange={toggleDrawer}
    open={open}
  >
    <AppBar title="ESS" onLeftIconButtonTouchTap={toggleDrawer} />
    <MenuItem
      primaryText="Conversations"
      containerElement={<Link to="/conversations" />}
      onTouchTap={() => {
        toggleDrawer()
      }}
    />
    <MenuItem
      primaryText="Settings"
      containerElement={<Link to="/settings" />}
      onTouchTap={() => {
        toggleDrawer()
      }}
    />
  </Drawer>
);

export default ConvDrawer;
