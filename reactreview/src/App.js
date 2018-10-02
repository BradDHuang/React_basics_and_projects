
import React, {Component} from "react";
import "./App.css";
import Text from "./Text.js";
// import PropTypes from 'prop-types';

function add(a, b) {
  return a + b;
}

const data = [
  { id: "aaa", name: "An" },
  { id: "bbb", name: "Ben" }
];

// Reusable component:
function List(props) {
  return (
    <li>id: {props.id} | name: {props.name}</li>
  );
}

class App extends Component {
  // use the construtor to init state
  constructor(props) {
    super(props);
    this.state = { number: 1, data };
  }
  addOne = () => {
    this.setState({ number: this.state.number + 1 });
  }
  logInput = (e) => {
    console.log(e.target.value);
  }
  render() {
    // console.log(this.state);
    const name = "Brad";
    const textStyle = {
      color: "#00f",
      marginLeft: 20
    };
    const stringProps = 'I am a string';
    const numberProps = 1;
    const objectProps = {a: 1, b: 2, c: 3};
    const arrayProps = [1, 2, 3, 4, 5];
    return (
      <div>
        <h1 className="green">React App Running!</h1>
        <h2>Content goes below:</h2>
        <br />
        <p style={textStyle}>contents are here. x + 9 = ({this.state.number}) + 9 = { add(this.state.number, 9) }.</p>
        <p>{name}{ name.length > 5 ? ", name length > 5." : ", name length <= 5." }</p>
        <Text 
          text="text goes here." 
          stringProps={stringProps}
          numberProps={numberProps}
          objectProps={objectProps}
          arrayProps={arrayProps}
        />
        <button onClick={this.addOne}>x++</button>
        <input onChange={this.logInput} />
        <br />
        <ul>
          {this.state.data.map((record, index) => {
            return <List key={index} id={record.id} name={record.name} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
