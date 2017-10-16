import React from 'react';
import {ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

const ConvNavLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Conversations" containerElement={<Link to="conversations"/>}/>
    <FlatButton label="Settings" containerElement={<Link to="settings" />}/>
  </ToolbarGroup>
);

export default ConvNavLinks;
