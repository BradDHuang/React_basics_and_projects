
import React, {Component} from 'react';

class Text extends Component {
  render() {
    console.log(this.props);
    // {
    //   text: "Hello World!"
    //   stringProps: "I am a string",
    //   numberProps: 1,
    //   objectProps: {a: 1, b: 2, c: 3},
    //   arrayProps: [1, 2, 3, 4, 5]
    // }
    return <p>{this.props.text}</p>;
  }
}

export default Text;

