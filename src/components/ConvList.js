import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import SimpleMenu from './SimpleMenu';
import { withStyles } from 'material-ui/styles';
import TimeAgo from 'react-timeago';
import engStrings from 'react-timeago/lib/language-strings/en-short.js'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { withTheme } from 'material-ui/styles';

const formatter = buildFormatter(engStrings)




const styles = {
  smallAvatar: {
    width: 20,
    height: 20,
    fontSize: 10,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
    fontFamily: "Roboto",
    alignItems: "center",
    userSelect: "none",
    borderRadius: "50%",
    justifyContent: "center",
    color: "#fafafa",
    backgroundColor: "rgb(185, 185, 185)",
  },
  selectedListItem: {
    backgroundColor: "#FFF9C4",
    '&:hover': {
      background: "#FFF9C4"
    }
  }
};

const ConvList = ({tickets, selectedIndex, onRequestChange, users, classes, theme}) => (
  <div className="convList">
    <List>
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
                                      <span className={classes.smallAvatar}>{ticket.unreadMessagesCount}</span>
                                    </span>
                                  </span>}
                  />
                  <ListItemSecondaryAction>
                    <SimpleMenu/>
                  </ListItemSecondaryAction>
                </ListItem>);
              })}
    </List>


  </div>
);

export default  withTheme()(withStyles(styles)(ConvList));
