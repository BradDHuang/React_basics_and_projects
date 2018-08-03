import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
// import Table from "./Table.js";
// import Tr from "./Tr.js";
// import Td from "./Td.js";

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

export default App;








