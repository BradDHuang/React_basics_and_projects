/*
import React, {Component} from "react";
import "./App.css";
import Text from "./Text.js";
// import PropTypes from 'prop-types';

function add(a, b) {
  return a + b;
}

const data = [
  { id: "aaa", name: "An" },
  { id: "bbb", name: "Ben" }
];

// Reusable component:
function List(props) {
  return (
    <li>id: {props.id} | name: {props.name}</li>
  );
}

class App extends Component {
  // use the construtor to init state
  constructor(props) {
    super(props);
    this.state = { number: 1, data };
  }
  addOne = () => {
    this.setState({ number: this.state.number + 1 });
  }
  logInput = (e) => {
    console.log(e.target.value);
  }
  render() {
    // console.log(this.state);
    const name = "Brad";
    const textStyle = {
      color: "#00f",
      marginLeft: 20
    };
    const stringProps = 'I am a string';
    const numberProps = 1;
    const objectProps = {a: 1, b: 2, c: 3};
    const arrayProps = [1, 2, 3, 4, 5];
    return (
      <div>
        <h1 className="green">React App Running!</h1>
        <h2>Content goes below:</h2>
        <br />
        <p style={textStyle}>contents are here. x + 9 = ({this.state.number}) + 9 = { add(this.state.number, 9) }.</p>
        <p>{name}{ name.length > 5 ? ", name length > 5." : ", name length <= 5." }</p>
        <Text 
          text="text goes here." 
          stringProps={stringProps}
          numberProps={numberProps}
          objectProps={objectProps}
          arrayProps={arrayProps}
        />
        <button onClick={this.addOne}>x++</button>
        <input onChange={this.logInput} />
        <br />
        <ul>
          {this.state.data.map((record, index) => {
            return <List key={index} id={record.id} name={record.name} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
*/
/*
import React, {Component, PureComponent} from 'react';

class Pure extends PureComponent {
  render() {
    console.log('pure component render() called');
    return (
      <div>
        <h3>Pure Component</h3>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.id}</p>
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    );
  }
}
class Regular extends Component {
  render() {
    console.log('component render() called');
    return (
      <div>
        <h3>Component</h3>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.id}</p>
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    );
  }
}

class App extends Component {
  state = {number: 1, user: {username: 'a', id: 1}};
  addOne = () => {
    this.setState({number: this.state.number + 1});
  };
  render() {
    const {user, number} = this.state;
    user.id = number;
    console.log('current user: ', user);
    return (
      <div>
        <Pure user={user} addOne={this.addOne} />
        <Regular user={user} addOne={this.addOne} />
      </div>
    );
  }
}

export default App;
*/

import React, {Component} from 'react';

// hoc for localization strings
const withLocalization = OldComponent => {
  class NewComponent extends Component {
    render() {
      const template = {
        en: {
          hello: 'hello',
          bye: 'bye',
        },
        cn: {
          hello: '你好',
          bye: '再见',
        },
      };
      // get the language from this.props
      // use en by default
      const lang = this.props.lang || 'en';
      const localizationString = template[lang];
      return <OldComponent localizationString={localizationString} />;
    }
  }
  return NewComponent;
};

// use hoc for Text and Button

const WithLocalizationButton = withLocalization(Button);
const WithLocalizationText = withLocalization(Text);

// app component
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

// header component

function Header(props) {
  return (
    <div>
      <p>Header</p>
      <WithLocalizationButton />
    </div>
  );
}

// content component
function Content(props) {
  return (
    <div>
      <p>Content</p>
      <WithLocalizationText />
    </div>
  );
}

// footer component
function Footer(props) {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
}

// Text component
function Text(props) {
  return (
    <p>{props.localizationString ? props.localizationString.hello : ''}</p>
  );
}
// Button component
function Button(props) {
  return (
    <button>
      {props.localizationString ? props.localizationString.bye : ''}
    </button>
  );
}

export default App;




