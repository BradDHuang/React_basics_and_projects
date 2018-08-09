
import React, {Component} from "react";
// import axios from "axios";
import "./style.css";

import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import UserList from "../UserList";
import UserDetail from "../UserDetail";

const Home = () => {
    return (
        <div className="form_style">
            <h2>{"Home Page"}</h2>
            <Link to="/users">UserList</Link>
            
        </div>
    );
    
};

class App extends Component {
  
  render() {
    
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/users" component={UserList} />
                    <Route path="/users/:login" component={UserDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;







