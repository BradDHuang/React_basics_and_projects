
import React, { Component } from 'react';

import {connect} from "react-redux";

class App extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.setFilter('active');
    }, 5000);
  }
  
  render() {
    console.log(this.props.todos);
    console.log(this.props.filter);
    return (
      <div>
        App
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};
// mapping state.todos as props.todos 
// and state.filter as props.filter in App component.

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch({type: 'SET_FILTER', filter: filter});
    },
  };
};
// mapping the func. setFilter as props.setFilter in App componnet.

export default connect(mapStateToProps, mapDispatchToProps)(App);
// both are optional.
// If passing nothing, nothing will be mapped.






