
import React, { Component } from 'react';
import {connect} from "react-redux";

import AddTodo from '../../components/AddTodo';
import * as actions from '../../actions';
import TodoList from '../../components/TodoList';
import Filter from '../../components/Filter';

class App extends Component {
  /*
  componentDidMount() {
    setTimeout(() => {
      this.props.setFilter('active');
    }, 5000);
  }
  */
  render() {
    console.log(this.props.todos);
    console.log(this.props.filter);
    return (
      <div>
          <AddTodo addTodo={this.props.addTodo} />
          <TodoList 
            list={this.props.todos} 
            onTodoClick={this.props.toggleTodo} 
            filter={this.props.filter}
          />
          <Filter filter={this.props.filter} setFilter={this.props.setFilter} />
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
// mapping state.todos 
// as props.todos 
// and state.filter as props.filter in App component.

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
        dispatch(actions.addTodo(text));
    },
    toggleTodo: (id) => {
        dispatch(actions.toggleTodo(id));
    },
    setFilter: (filter) => {
      // dispatch({type: 'SET_FILTER', filter: filter});
      dispatch(actions.setFilter(filter));
    },
  };
};
// mapping the func. setFilter 
// as props.setFilter in App componnet.

export default connect(mapStateToProps, mapDispatchToProps)(App);
// both are optional.
// If passing nothing, nothing will be mapped.






