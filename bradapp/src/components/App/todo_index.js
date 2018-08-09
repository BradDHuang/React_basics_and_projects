
import React, {Component} from "react";
import "./style.css";

// this is the "filter" part:
const Filter = (props) => {
    return (
        <div className="form_style">
            <button 
                onClick={() => {props.setFilter("all");}}
                disabled={props.curFilter === "all"}
                >
                All
            </button>
            <button 
                onClick={() => {props.setFilter("active");}}
                disabled={props.curFilter === "active"}
                >
                Active
            </button>
            <button 
                onClick={() => {props.setFilter("completed");}}
                disabled={props.curFilter === "completed"}
                >
                Completed
            </button>
        </div>
    );
};

const TodoForm = (props) => {
  
  const {curFilter} = props;
  const selectedTodos = props.todos.filter((todo) => {
    if (curFilter === "all") {
        return true;
    } else if (curFilter === "active") {
        return !todo.completed;
    } else {
        return todo.completed;
    }
  });
  
  
  // avoid using ref for better performance.
  // instead, use a class component to add todo.
  /*    
  let input;
  // ref
  // Refs provide a way to access DOM nodes or React elements created in the render method.
  return (<div className="form_style">
            <label className="labels">
              To-Do
              <input className="inputval" ref={ node => input = node } />
            </label>
            <button onClick={ () => {props.addTodo(input.value); 
                              input.value = "";} 
                            }>ADD</button>
          </div>
  );
  */
  return (
    <div className="todos">
        <ul>
          {selectedTodos.map((todo, index) => {
            return (<li 
                      key={todo.id} 
                      onClick={() => (props.toggleTodo(todo.id))} 
                      style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                      {todo.text}
                    </li>);
          })}
        </ul>
    </div>
  );
};

class AddTodo extends Component {
  state = {input: ''};

  render() {
    return (
      <div className="form_style">
        <input
          value={this.state.input}
          onChange={e => {
            this.setState({input: e.target.value});
          }}
        />
        <button
          onClick={() => {
            this.props.addTodo(this.state.input);
            this.setState({input: ''});
          }}>
          Add To-do
        </button>
      </div>
    );
  }
}

let index = 0;

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { todo: "", todos: [] };
    // this.state = { todos: [] };
    this.state = { todos: [], curFilter: "all" };
  }
  
  addTodo = (val) => {
    const todo = { text: val, id: index++, completed: false };
    let cur = this.state.todos;
    cur.push(todo);
    this.setState({ todos: cur });
  }
  
  toggleTodo = (id) => {
    const {todos} = this.state;
    
    this.setState({ todos: [...todos.slice(0, id), 
                           {...todos[id], completed: !todos[id].completed}, 
                            ...todos.slice(id + 1)]
                 });
  }
  
  setFilter = (filter) => {
      this.setState({ curFilter: filter });
  }
  
  render() {
    const {todos, curFilter} = this.state;
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoForm 
            todos={todos}
            curFilter={curFilter}
            
            toggleTodo={this.toggleTodo}
        />
        <Filter 
            setFilter={this.setFilter}
            curFilter={curFilter}
        />
      </div>
    );
  }
}

export default App;





