
import './Header.css';

import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <div className="header">{this.props.h}</div>    
        );
    }
}

export default Header;



