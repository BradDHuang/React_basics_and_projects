
import React, {Component} from "react";
// import axios from "axios";
import "./style.css";

import {BrowserRouter, Route, Switch, Link, withRouter} from "react-router-dom";

import UserList from "../UserList";
import UserDetail from "../UserDetail";
/*
const Home = () => {
    
};
*/
class Home extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
        <div className="form_style">
            <h2>{"Home Page: You logged in."}</h2>
            <Link to="/users">UserList</Link>
        </div>
    );
  }
}

class Login extends Component {
    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push("/");
        }
    }
    state = {username: "", password: ""};
    login = (username, password) => {
        // console.log(username, password);
        this.props.loginHandler(username, password);
        this.props.history.push("/");
        
        // Async
        /*
        console.log(this.props.authenticated); // false
        console.log(this.props.matched); // false
        if (this.props.matched) {
            console.log(this.props.matched);
            this.props.history.push("/");
        }
        */
    }
    render() {
        return (
            <div>
                <input value={this.state.username} onChange={e => { this.setState({username: e.target.value}); }} />
                <input value={this.state.password} onChange={e => { this.setState({password: e.target.value}); }} />
                <button onClick={ () => { this.login(this.state.username, this.state.password); 
                                          this.setState({username: "", password: ""}); } }
                >Login</button>
            </div>
        );
    }
}

const WithRouterLogin = withRouter(Login);
const WithRouterHome = withRouter(Home);

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { authenticated: false};
  }
  
  loginHandler = (username, password) => {
    //   console.log(typeof(username), password);
      if (username === "username" && password === "password") {
          console.log("matched");
          this.setState({ authenticated: true });
        //   this.setState({ matched: true });
      } else {
          alert("Incorrect username/password");
      }
  }
  render() {
    
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact={true} path="/" 
                        //   component={Home}
                        render={ () => (<WithRouterHome
                                            authenticated={this.state.authenticated} 
                                            matched={this.state.matched}
                                        />
                        )}
                    />
                    <Route exact={true} path="/users" component={UserList} />
                    <Route path="/users/:login" component={UserDetail} />
                    
                    <Route exact={true} 
                        path="/login" 
                        // component={Login}
                        render={ () => (<WithRouterLogin 
                                            authenticated={this.state.authenticated} 
                                            matched={this.state.matched}
                                            loginHandler={this.loginHandler}
                                        />) }
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;







