
import React, {Component} from "react";
import "./style.css";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }
    showDialog = () => {
        // alert("You clicked the btn!");
        this.setState({ clicked: true });
    }
    closeDialog = () => {
        this.setState({ clicked: false });
    }
    render() {
        const {clicked} = this.state;
        return (
            <div>
                <button className="btn" onClick={this.showDialog}>{this.props.buttonText}</button>
                <div style={{display: clicked? "block" : "none"}}  className="modalbackground">
                    {clicked? <div className="modal" style={{width: this.props.width}}>
                                <h2>{this.props.content}</h2>
                                <h3>{"Hi, this is the Modal Dialog."}</h3>
                                <br />
                                <button onClick={this.closeDialog}>{this.props.cancelButtonText}</button>
                              </div> : ""}
                </div>
            </div>
        );
    }
}

export default Modal;









