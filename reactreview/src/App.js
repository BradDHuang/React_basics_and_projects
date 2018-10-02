
import React, {Component} from "react";
import "./App.css";

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
    return (
      <div>
        <h1 className="green">React App Running!</h1>
        <h2>Content goes below:</h2>
        <br />
        <p style={textStyle}>contents are here. 1 + 9 = { add(1, 9) }.</p>
        <p>{name}{ name.length > 5 ? ", name length > 5." : ", name length <= 5." }</p>
      </div>
    );
  }
}

export default App;
