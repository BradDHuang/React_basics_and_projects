import React, { Component } from 'react';
class HW extends Component {
  // e is the event, here should be a `onChange` event
  // e.target is the where the event is happening
  // e.target.value is the value of the element where the event is happening
  showInput = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  };
  render() {
    return <input onChange={this.showInput} />;
  }
}
export default HW;