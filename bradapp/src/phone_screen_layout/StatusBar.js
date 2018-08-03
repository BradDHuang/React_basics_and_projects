
import './StatusBar.css';

import React, {Component} from "react";

class StatusBar extends Component {
    render() {
        return (
            <div className="statusBar">{this.props.bar}</div>    
        );
    }
}

export default StatusBar;



