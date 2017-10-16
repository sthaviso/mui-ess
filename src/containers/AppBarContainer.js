import React, {Component} from 'react';
import { connect } from 'react-redux';
import ConvAppBar from '../components/ConvAppBar';
import { clickIconMenu } from '../actions/index';

class AppBarContainer extends Component
{
  render()
  {
    return (<ConvAppBar {...this.props} />);
  }
}




const mapDispatchToProps = (dispatch) => ({
  onIconMenuClick: () => (dispatch(clickIconMenu()))
});

export default connect(null, mapDispatchToProps)(AppBarContainer);
