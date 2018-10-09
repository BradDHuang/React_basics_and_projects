import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Panel;


