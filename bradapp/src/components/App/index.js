// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './style.css';
// import IconPlus from './counterApp/plus.js';
// import IconMinus from './counterApp/minus.js';
// eslint-disable-next-line
// import Table from "./Table.js";
// import Tr from "./Tr.js";
// import Td from "./Td.js";
// import HW from "../HW";

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

/*
class App extends Component {
  render() {
    return (
      <Table 
        r1={
        <Tr 
          c1={<Td d="&nbsp;"/>}
          c2={<Td d="Knocky"/>}
          c3={<Td d="Flor"/>}
          c4={<Td d="Ella"/>}
          c5={<Td d="Juan"/>}
        />}
        r2={
        <Tr 
          c1={<Td d="Breed"/>}
          c2={<Td d="Jack Russell"/>}
          c3={<Td d="Poodle"/>}
          c4={<Td d="Streetdog"/>}
          c5={<Td d="Cocker Spaniel"/>}
        />}
        r3={
        <Tr 
          c1={<Td d="Age"/>}
          c2={<Td d="16"/>}
          c3={<Td d="9"/>}
          c4={<Td d="10"/>}
          c5={<Td d="5"/>}
        />}
        r4={
        <Tr 
          c1={<Td d="Owner"/>}
          c2={<Td d="Mother-in-law"/>}
          c3={<Td d="Me"/>}
          c4={<Td d="Me"/>}
          c5={<Td d="Sister-in-law"/>}
        />}
        r5={
        <Tr 
          c1={<Td d="Eating Habits"/>}
          c2={<Td d="Eats everyone's leftovers"/>}
          c3={<Td d="Nibbles at food"/>}
          c4={<Td d="Hearty eater"/>}
          c5={<Td d="Will eat till he explodes"/>}
        />
        }
      />
    );
  }
}
*/

/*
// import React, {Component} from 'react';
import Text from './Text.js';

class App extends Component {
  render() {
    const stringProps = 'I am a string';
    const numberProps = 1;
    const objectProps = {a: 1, b: 2, c: 3};
    const arrayProps = [1, 2, 3, 4, 5];
    return (
      <Text
        text="Hello World!"
        stringProps={stringProps}
        numberProps={numberProps}
        objectProps={objectProps}
        arrayProps={arrayProps}
      />
    );
  }
}
*/

/*
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Content from "./layout/Content.js";

class App extends Component {
  render() {
    return (
      <div>
        {<Header h="Header"/>}
        {<Content c="Content"/>}
        {<Footer f="Footer"/>}
      </div>
    );
  };
}
*/

/*
import StatusBar from "./phone_screen_layout/StatusBar.js";
import Docker from "./phone_screen_layout/Docker.js";
import Content from "./phone_screen_layout/Content.js";

class App extends Component {
  render() {
    return (
      <div>
        {<StatusBar bar="Status Bar"/>}
        {<Content c1="col1" c2="col2" c3="col3" c4="col4"/>}
        {<Docker col1="col1" col2="col2" col3="col3" col4="col4"/>}
      </div>
    );
  };
}
*/

/*
class App extends Component {
    // init. state:
    constructor(props) {
        super(props);
        this.state = {starter: 1};
    }
    
    inc = () => {
      this.setState({starter: this.state.starter + 1});
    }
    dec = () => {
      this.setState({starter: this.state.starter - 1});
    }
    
    render() {
        return (<div>
        <h1 className="counter">
            {this.state.starter}
        </h1>
        <div className="btns">
          <button className="span" onClick={this.inc}><IconPlus /></button>
          <button className="span" onClick={this.dec}><IconMinus /></button>
        </div>
        </div>);
    }
}
*/

/*
class App extends Component {
  render() {
    return (
      <div>
        {<HW />}
      </div>
    );
  }
}

export default App;
*/

/*
import React, {Component} from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { curNum: 1 };
    this.state = { curNum: 0, started: false };
  }
  showStop = () => {
    this.timer = setInterval(() => 
      this.setState({
        curNum: this.state.curNum + 1
    }), 1000);
    this.setState({ started: true });
  }
  showStart = () => {
    clearInterval(this.timer);
    this.setState({ started: false });
  }
  resetNum = () => {
    this.setState({ curNum: 0 });
  }
  render() {
    const {started} = this.state;
    return (
        <div>
          <h1 className="counter">{this.state.curNum}</h1>
          <div className="btns">
            <button className="span" onClick={started? this.showStart : this.showStop}>{started? "STOP" : "START"}</button>
            <button className="span" onClick={this.resetNum}>RESET</button>
          </div>
        </div>
    );
  }
}

export default App;
*/

/*
import React, {Component} from "react";
import axios from "axios";
import "./style.css"

function List(props) {
  const imgStyle = { width: 100, height: 100 }
  return (
    <tr onClick={props.showDetails}>
      <td>{props.id}</td>
      <td>{props.login}</td>
      <td>
        <img style={imgStyle} src={props.avatar_url} alt={props.avatar_url} />
      </td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], clickedAUser: false }; // result data type.
  }
  componentDidMount() {
    axios({ method: "get", url: "https://api.github.com/users?per_page=100"})
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }
  
  showUserDetails = (username) => {
    this.setState({ clickedAUser: true});
    axios({ method: "get", url: "https://api.github.com/users/" + username })
      .then(response => {
        console.log(response);
        this.setState({ Name: response.data.name,
                        Location: response.data.location,
                        Following: response.data.following,
                        Followers: response.data.followers
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }
  
  render() {
    const {clickedAUser} = this.state;
    const name = this.state.Name;
    const location = this.state.Location;
    const following = this.state.Following;
    const followers = this.state.Followers;
    return (
      <div>
      <div className="table">
      <h3>{"List"}</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => {
            return <List key={item.id} {...item} showDetails={() => this.showUserDetails(item.login)} />;
          })}
        </tbody>
      </table>
      </div>
        <div>
          <h3 className="details_h3">{"User Details:"}</h3>
          <div className="details">
            {clickedAUser? `Name: ${name}` : ""}<br />
            {clickedAUser? `Location: ${location}` : ""}<br />
            {clickedAUser? `Following: ${following}` : ""}<br />
            {clickedAUser? `Followers: ${followers}` : ""}<br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
*/


import React, {Component} from "react";
import "./style.css"

function Msg(props) {
    return (
      <div>{props.msg}</div>
    );
}
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", loggedIn: false, authenticated: false, showMsg: false };
  }
  login = () => {
    this.setState({ loggedIn: true });
  }
  logout = () => {
    this.setState({ loggedIn: false });
  }
  handleUsername = e => {
    this.setState({ username: e.target.value });
  }
  handlePassword = e => {
    this.setState({ password: e.target.value });
  }
  /*
  notEmpty = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  */
  validateInfo = () => {
    
    let user = this.state.username;
    let date = new Date();
    let month = date.getMonth() + 1;
    month = (month < 10) ? ("0" + month) : month;
    let day1 = date.getDate();
    let day2 = day1 + 1;
    let day3 = day1 - 1;
    // corner cases to be fixed: e.g. the beginning / end date of a month.
    day1 = (day1 < 10) ? ("0" + day1) : day1;
    
    day2 = (day2 < 10) ? ("0" + day2) : day2;
    
    day3 = (day3 < 10) ? ("0" + day3) : day3;
    let match1 = "" + date.getFullYear() + month + day1;
    let match2 = "" + date.getFullYear() + month + day2;
    let match3 = "" + date.getFullYear() + month + day3;
    let pw = this.state.password;
    if ( (user === "today" && pw === match1)  
          || (user === "tomorrow" && pw === match2)
          || (user === "yesterday" && pw === match3) ) {
      this.setState({authenticated: true});   
      this.setState({loggedIn: true});
      this.setState({showMsg: false});
      
    } else {
      
      this.setState({showMsg: true});
    }
  }
  resetAuth = () => {
    this.setState({ authenticated: false });
    this.setState({ loggedIn: false });
    this.setState({ username: "" });
    this.setState({ password: "" });
    
  }
  
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
  }
  render() {
    const {loggedIn, authenticated, showMsg} = this.state;
    return (<form className="form_style" onSubmit={this.handleSubmit}>
              {authenticated &&
              <div>
                <h3 className="loggedin">{"You loggedin now."}</h3>
                <br />
                <div>
                  <button type="submit" onClick={this.resetAuth}>
                    {"Logout"}
                  </button>
                </div>
              </div>
              }
              {!authenticated && 
              <div>
                <h3>{!loggedIn && "Login required."}</h3>
                <div>
                  <label className="labels">
                    Username 
                    <input className="inputval"
                      type="text" 
                      value={this.state.username}
                      onChange={this.handleUsername}
                    />
                  </label>
                  <label className="labels">
                    Password
                    <input className="inputval"
                      type="text"
                      value={this.state.password}
                      onChange={this.handlePassword}
                    />
                  </label>
                </div>
                <br />
                <div>
                  {(!loggedIn) &&
                  <button type="submit" onClick={this.validateInfo}>
                    {"Login"}
                  </button>
                  }
                  {(showMsg) && 
                    <div className="msg">
                    <br />
                    <h3>
                    <Msg msg="Incorrect Username and/or Password! Please try again."/>
                    </h3>
                    </div>
                  }
                </div>
              </div>
              }
            </form>
    );
  }
}

export default App;












