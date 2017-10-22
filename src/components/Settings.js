import React from 'react';
import { connect } from 'react-redux';
import { seedFirebase } from '../actions/index';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

let Settings = ({dispatch, classes}) => (
  <div style={{ textAlign: 'center', height: "100vh" }}>
    <Button
      raised
      className={classes.button}
      onClick={() => dispatch(seedFirebase())}>
        Seed Firebase
    </Button>

  </div>
);

Settings = withStyles(styles)(connect()(Settings));
export default Settings;
