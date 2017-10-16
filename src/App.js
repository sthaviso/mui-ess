import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from './containers/AppBarContainer';
import Drawer from './containers/DrawerContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Settings from './components/Settings'
import Home from './components/Home'
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Drawer/>
            <Route exact path="/" component={Home}/>
            <Route path="/conversations" component={Home}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
