import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConvDrawer from '../components/ConvDrawer';
import { clickIconMenu } from '../actions/index';
import { withRouter} from 'react-router-dom';

class DrawerContainer extends Component
{
  render()
  {
    return (<ConvDrawer {...this.props}/>);
  }
}

const mapStateToProps = (state) => ({
  open: state.agent.open || false
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => (dispatch(clickIconMenu()))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DrawerContainer));
