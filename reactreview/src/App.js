
import React, {Component} from "react";
import "./App.css";
import Text from "./Text.js";
// import PropTypes from 'prop-types';

function add(a, b) {
  return a + b;
}

class App extends Component {
  render() {
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
        <p style={textStyle}>contents are here. 1 + 9 = { add(1, 9) }.</p>
        <p>{name}{ name.length > 5 ? ", name length > 5." : ", name length <= 5." }</p>
        <Text 
          text="text goes here." 
          stringProps={stringProps}
          numberProps={numberProps}
          objectProps={objectProps}
          arrayProps={arrayProps}
        />
      </div>
    );
  }
}

export default App;
