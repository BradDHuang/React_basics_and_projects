
import React, {Component} from "react";

class Text extends Component {
  render() {
    console.log(this.props);
    // {text: "text goes here."}
    
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

export default Text;