
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        };
    }
    handleRed = (e) => {
        this.setState({ red: e.target.value });
    }
    handleGreen = (e) => {
        this.setState({ green: e.target.value });
    }
    handleBlue = (e) => {
        this.setState({ blue: e.target.value });
    }
    handleAlpha = (e) => {
        this.setState({ alpha: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const {red, green, blue, alpha} = this.state;
        return (
            <form onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
                <div style={{
                    background: "rgba(" + red + "," + green + ","  + blue + "," + alpha + ")",
                    width: "100px",
                    height: "100px",
                    display: "inline-flex"
                }}>
                </div>
                <div>
                    {"rgba(" + red + "," + green + ","  + blue + "," + alpha + ")"}
                </div>
                <br />
                <div>
                    <input type="number" min="0" max="255" value={this.state.red} onChange={this.handleRed} />
                    <br />
                    {"red: " + red}
                </div>
                <div>
                    <input type="number" min="0" max="255" value={this.state.green} onChange={this.handleGreen} />
                    <br />
                    {"green: " + green}
                </div>
                <div>
                    <input type="number" min="0" max="255" value={this.state.blue} onChange={this.handleBlue} />
                    <br />
                    {"blue: " + blue}
                </div>
                <div>
                    <input type="number" min="0" max="1" step="0.01" value={this.state.alpha} onChange={this.handleAlpha} />
                    <br />
                    {"alpha: " + alpha}
                </div>
            </form>
        );
    }
}

export default App;






