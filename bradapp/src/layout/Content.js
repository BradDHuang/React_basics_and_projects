
import './Content.css';

import React, {Component} from "react";

class Content extends Component {
    render() {
        return (
            <div className="content">{this.props.c}</div>    
        );
    }
}

export default Content;





