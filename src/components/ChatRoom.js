import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import TimeAgo from 'react-timeago';
import engStrings from 'react-timeago/lib/language-strings/en-short.js'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { withTheme } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import HighlightOffIcon from 'material-ui-icons/HighlightOff';
import Divider from 'material-ui/Divider';
import classNames from 'classnames/bind';


const formatter = buildFormatter(engStrings)

const styles = (theme) => {
  return {
    timeStamp: {
      paddingTop: 5
    },
    bubble: {
      backgroundColor: theme.palette.primary[50],
      borderRadius: 8,
      boxShadow: "0px 0px 6px #B2B2B2",
      padding: 8,
      wordBreak: "break-all",
      wordWrap: "break-word",
      display: "inline-block"
    },
    pullRight : {
      textAlign: 'right',
      paddingRight: '30px'
    },
    pullLeft : {
      paddingLeft: '30px'
    },
    bubbleLeft: {
      marginRight: '40px',
    },
    bubbleRight: {
      marginLeft: '40px',
    },
    subheader: {
      backgroundColor: 'white'
    }

  }
};

const ChatRoom = ({classes, theme}) => (
    <List subheader={
      <ListSubheader className={classes.subheader}>
        Conversation with Haris
          <ListItemSecondaryAction>
            <IconButton className={classes.button} aria-label="Delete">
              <HighlightOffIcon />
            </IconButton>
          </ListItemSecondaryAction>
      </ListSubheader>}>

      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>





      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
      <ListItem
        key={123}
        button={false}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
        <ListItemText
          className = {classes.pullLeft}
          primary={<span>
                    <div className={classNames(classes.bubble, classes.bubbleLeft)}>
                      Hello xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                      <div className={classes.timeStamp}>
                        <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                      </div>
                    </span>}/>

      </ListItem>
      <ListItem
        key={456}
        button={false}>
        <ListItemText
          className={classes.pullRight}
          primary={<div style={{display:'inline-block'}}>
                    <div className={classNames(classes.bubble, classes.bubbleRight)}>
                      Hello
                    </div>
                    <div className={classes.timeStamp} style={{textAlign: 'left', marginLeft: 40, paddingLeft: 8}}>
                      <TimeAgo style={theme.typography.caption} date={Date.now()} formatter={formatter}/>
                    </div></div>}
        />
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/women/45.jpg"/>
        </ListItemAvatar>
      </ListItem>
    </List>
);

  export default  withTheme()(withStyles(styles)(ChatRoom));
