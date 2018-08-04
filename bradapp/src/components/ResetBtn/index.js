
import React, {Component} from "react";

class ResetBtn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <button onClick={this.props.reset}>RESET</button>
        );
    }
}

export default ResetBtn;