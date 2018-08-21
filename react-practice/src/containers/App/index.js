import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: '', outputVal: ''};
  }
  handleInputChange = (e) => {
    console.log(e.target);
    let val = e.target.value;
    let len = e.target.value.length;
    if (val === "" || val === "0") {
      this.setState({inputVal: val, outputVal: val});
    } else if (val.slice(len - 1, len) === "1") {
      this.setState({inputVal: val, outputVal: val + "st"});
    } else if (val.slice(len - 1, len) === "2") {
      this.setState({inputVal: val, outputVal: val + "nd"});
    } else if (val.slice(len - 1, len) === "3") {
      this.setState({inputVal: val, outputVal: val + "rd"});
    } else if (parseInt(val.slice(len - 1, len), 10) >= 0 && parseInt(val.slice(len - 1, len), 10) <= 9) {
      this.setState({inputVal: val, outputVal: val + "th"});
    } else {
      this.setState({inputVal: val, outputVal: val});
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <p>
          A simple app that converts numbers to their ordinal values.
        </p>
        <br />
        <form onSubmit={this.handleSubmit} style={{color: "blue", textAlign: "center"}}>
          <input 
            type="text" 
            value={this.state.inputVal} 
            onChange={this.handleInputChange}
          />
          <div>
          <br />
          {"The ordinal output:"}
          <br />
          <div style={{border: "1px solid black", width: "165px", height: "20px", display: "inline-block"}}>
            {this.state.outputVal}
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
