
import './Footer.css';

import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">{this.props.f}</div>    
        );
    }
}

export default Footer;



