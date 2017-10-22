import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import SimpleMenu from './SimpleMenu';
import { withStyles } from 'material-ui/styles';
import TimeAgo from 'react-timeago';
import engStrings from 'react-timeago/lib/language-strings/en-short.js'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { withTheme } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
const formatter = buildFormatter(engStrings)




const styles = (theme) => ({
  smallAvatar: {
    width: 20,
    height: 20,
    fontSize: 10,
  },
  selectedListItem: {
    backgroundColor: theme.palette.primary[50],
    '&:hover': {
      background: theme.palette.primary[50]
    }
  },
  subheader: {
    backgroundColor: 'white'
  }
});

const ConvList = ({tickets, selectedIndex, onRequestChange, users, classes, theme}) => (
    <List subheader={<ListSubheader className={classes.subheader}>Inbox</ListSubheader>}>
      <Divider/>
      {tickets.map((ticket, index) => {
              let user = users[ticket.createdBy];
              return (
                <ListItem
                  key={ticket.id}
                  button
                  className={ticket.id === selectedIndex ? classes.selectedListItem : ''}
                  divider={true}
                  onClick={(event)=> onRequestChange(event, ticket.id)}>
                  <ListItemAvatar>
                    <Avatar src={user.avatar}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span>
                                {user.name}
                                <span className="listTimeStamp" style={theme.typography.caption}>
                                  <TimeAgo date={ticket.timestamp} formatter={formatter}/>
                                </span>
                              </span>}
                    secondary={<span>
                                    {ticket.text}
                                    <span className="listTimeStamp" >
                                      <Avatar className={classes.smallAvatar} component="span">{ticket.unreadMessagesCount}</Avatar>
                                    </span>
                                  </span>}
                  />
                  <ListItemSecondaryAction>
                    <SimpleMenu/>
                  </ListItemSecondaryAction>
                </ListItem>);
              })}

    </List>
);

export default  withTheme()(withStyles(styles)(ConvList));
