import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import SettingsIcon from 'material-ui-icons/Settings';

import {Link} from 'react-router-dom';

export const mailFolderListItems = (
  <div>
      <ListItem button  component={Link} to="/conversations">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button component={Link} to="/settings">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
      </ListItem>

    </div>
);
