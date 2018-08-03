
import './Content.css';

import React, {Component} from "react";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div>
                    <span className="span">{this.props.c1}</span>
                    <span className="span">{this.props.c2}</span>
                    <span className="span">{this.props.c3}</span>
                    <span className="span">{this.props.c4}</span>
                </div>
                <div>
                    <span className="span">{this.props.c1}</span>
                    <span className="span">{this.props.c2}</span>
                    <span className="span">{this.props.c3}</span>
                    <span className="span">{this.props.c4}</span>
                </div>
                <div>
                    <span className="span">{this.props.c1}</span>
                    <span className="span">{this.props.c2}</span>
                </div>
            </div>    
        );
    }
}

export default Content;



