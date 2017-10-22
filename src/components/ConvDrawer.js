import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Settings from './Settings'
import Home from './Home'
import {Route} from 'react-router-dom';

const drawerWidth = 60;

const styles = theme => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
      zIndex: 1
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'fixed',
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: theme.palette.primary[900]
    },
    drawerPaper: {
      position: 'relative',
      height: '100%',
      width: drawerWidth,
    },
    drawerHeader: theme.mixins.toolbar,
    content: {
      backgroundColor: theme.palette.background.default,
      width: `calc(100% - ${drawerWidth}px)`,
      height: 'calc(100% - 64px)',
      paddingTop: 64,
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        paddingTop: 64,
      },
    },
  }};

function ConvDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
              <Typography type="title" color="inherit" noWrap>
                ESS APP
              </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          type="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}/>
          <Divider />
          <List>{mailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Route exact path="/" component={Home}/>
          <Route path="/conversations" component={Home}/>
          <Route path="/settings" component={Settings}/>
        </main>
      </div>
    </div>
  );
}

ConvDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConvDrawer);
