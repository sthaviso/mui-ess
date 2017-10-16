import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConvList from '../components/ConvList';
import { selectIndex, fetchTickets } from '../actions/index';

class ConvListContainer extends Component {

  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    return (<ConvList {...this.props}/>);
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.agent.selectedIndex,
  tickets: state.tickets || [],
  users: state.users || []
});

const mapDispatchToProps = (dispatch) => ({
  onRequestChange: (event, index) => (dispatch(selectIndex(index))),
  fetchTickets: () => (dispatch(fetchTickets()))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvListContainer);
