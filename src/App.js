import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import Drawer from './containers/DrawerContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';

import AppBar from './containers/AppBarContainer';

const customTheme = {
  palette: {
    primary: blue,
    secondary: green,
  }
};

const theme = createMuiTheme(customTheme);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Drawer/>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
