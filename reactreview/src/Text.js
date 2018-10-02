
import React, {Component} from "react";
import PropTypes from 'prop-types';

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

Text.propTypes = {
  text: PropTypes.string
};

export default Text;