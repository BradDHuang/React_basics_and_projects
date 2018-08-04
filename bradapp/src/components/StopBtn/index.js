
import React, {Component} from "react";

class StopBtn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <button onClick={this.props.changeToStart}>STOP</button>
        );
    }
}

export default StopBtn;