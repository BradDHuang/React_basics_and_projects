
import './Docker.css';

import React, {Component} from "react";

class Docker extends Component {
    render() {
        return (
            <div className="docker">
                <span className="col">{this.props.col1}</span>
                <span className="col">{this.props.col2}</span>
                <span className="col">{this.props.col3}</span>
                <span className="col">{this.props.col4}</span>
            </div>    
        );
    }
}

export default Docker;



