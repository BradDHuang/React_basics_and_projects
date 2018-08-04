
import React, {Component} from "react";

class StartBtn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <button onClick={this.props.changeToStop}>START</button>
        );
    }
}

export default StartBtn;





