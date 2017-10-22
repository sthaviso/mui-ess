import React from 'react';
import ConvListContainer from '../containers/ConvListContainer.js';
import AppBar from 'material-ui/AppBar';
import ChatRoom from './ChatRoom';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  convList: {
    overflow: 'auto',
    position: 'relative',
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    width:'40%',
    height: '100%',
    boxSizing: 'border-box'
  },
  chatWindow: {
    boxSizing: 'border-box',
    width: '60%',
    height: '100%',
    position: 'relative'
  },
  chatRoom: {
    height: 'calc(100% - 95px)',
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  inputWrapper: {
    overflow: 'auto',
    padding: 10,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    boxSizing: 'border-box',
    height: 95,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex'
  },
  inputBox: {
    borderRadius: '10px',
    boxSizing: 'border-box',
    flexGrow: 1
  },
  container: {
    height: '100%',
    display: 'flex'
  },
  submitButton: {
    float: 'right'
  }
};
const Home = ({classes}) => (
  <div className={classes.container}>
    <div className={classes.convList}>
      <ConvListContainer/>
    </div>
    <div className={classes.chatWindow}>
      <div className={classes.chatRoom}>
        <ChatRoom/>
      </div>
      <div className={classes.inputWrapper}>
        <Input
            placeholder="Type Message ..."
            inputProps={{
              'aria-label': 'Description',
            }}
            multiline={true}
            disableUnderline={true}
            rows={3}
            className={classes.inputBox}
          />
        <Button className={classes.submitButton}>Send</Button>
      </div>
    </div>

  </div>
);

export default withStyles(styles)(Home);
