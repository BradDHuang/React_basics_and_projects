
import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", matched: false, showMsg: false };
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    validateInfo = () => {
        let username = this.state.username;
        let password = this.state.password;
        
        // UTC, Time Zone (Coordinated Universal Time)
        
        axios({
            method: "post",
            url: "http://api.haochuan.io/login",
            data: { username: `${username}`, password: `${password}` }
        })
            .then( response => {
                console.log(response.data);
                console.log(response.data.username, response.data.password);
                // if (response.)
                this.setState({ matched: true });
                // console.log(this.state.matched);
                this.setState({ showMsg: false });
            } )
            .catch( err => {
                this.setState({ showMsg: true });
                
                // clear input after submit:
                this.setState({ username: "" });
                this.setState({ password: "" });
                
                console.log(err);
                // alert(err);
            } );
        // Async.
        // console.log(this.state.matched);
        /*
        if (this.state.matched) {
            this.setState({ showMsg: false });
        } else {
            this.setState({ showMsg: true });
        }
        */
    }
    resetAuth = () => {
        this.setState({ matched: false });
        this.setState({ username: "" });
        this.setState({ password: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.state.matched &&
                    <div>
                        <h3>{"You loggedin now."}</h3>
                        <br />
                        <div>
                          <button type="submit" onClick={this.resetAuth}>
                          Logout
                          </button>
                        </div>
                    </div>
                }
                { !this.state.matched &&
                <div>
                    <label>
                        Username
                        <input type="text" value={this.state.username} onChange={this.handleUsername} />
                    </label>
                    <label>
                        Password
                        <input type="text" value={this.state.password} onChange={this.handlePassword} />
                    </label>
                    <button type="submit" onClick={this.validateInfo}>Login</button>
                    { this.state.showMsg && 
                        <div>
                            {"Incorrect Username and/or Password! Please try again."}
                        </div> 
                    }
                </div>
                }
            </form>
        );
    }
}

export default Login;











