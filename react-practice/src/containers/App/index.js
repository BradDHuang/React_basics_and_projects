/*
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
*/

import React, {Component} from 'react';
import CheckBox from '../../CheckBox';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, value: "apple", isChecked: false},
        {id: 2, value: "banana", isChecked: false},
        {id: 3, value: "grape", isChecked: false},
        {id: 4, value: "mango", isChecked: false}
      ],
      allChecked: false
    };
  }
  
  handleChildItemCheck = e => {
    let items = this.state.items;
    items.forEach(item => {
      if (item.value === e.target.value) {
        item.isChecked = e.target.checked;
      }
    });
    var marker = 1;
    for (let i = 0; i < items.length; i++) {
      if (!items[i].isChecked) {
        marker = 0;
        this.setState({allChecked: false});
        break;
      }
    }
    if (marker === 0) {
      this.setState({items});
    } else {
      this.setState({items, allChecked: true});
    }
    
  }
  handleCheckAll = e => {
    let items = this.state.items;
    items.forEach(item => {
      item.isChecked = e.target.checked;
    });
    this.setState({items, allChecked: !this.state.allChecked});
  }
  
  render() {
    return (
      <div className="App">
        Check List
        <h3>Check / Uncheck All Items</h3>
        <input type="checkbox" value="checkall" 
          onClick={this.handleCheckAll}
          checked={this.state.allChecked}
        />
        {!this.state.allChecked ? "Check All" : "Uncheck All"}
        <ul>
          {this.state.items.map((item) => {
            return <CheckBox {...item} key={item.id} handleChildItemCheck={this.handleChildItemCheck} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

