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
/*
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
*/
/*
import React, {Component} from 'react';

class App extends Component {
  number = 1;
  componentDidMount() {
    setInterval(() => {
      console.log(this.number);
      this.number++;
    }, 1000);
  }
  render() {
    return <Number number={this.number} />;
  }
}

const Number = ({number}) => (<div>{number}</div>);

export default App;
*/
/*
import React, {Component} from "react";
import { BrowserRouter, Route, withRouter, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

const Button = (props) => {
  return (
    <button onClick={() => {
      props.history.push("/");
    }}>
      Login
    </button>
  );
};
const WithRouterButton = withRouter(Button);

const Login = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>Login Page</h2>
      <WithRouterButton />
    </div>
  );
};

const Users = ({match}) => {
  // console.log(match);
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/1`}>Page of User 1</Link></li>
        <li><Link to={`${match.url}/2`}>Page of User 2</Link></li>
        <li><Link to={`${match.url}/3`}>Page of User 3</Link></li>
      </ul>
      <Route 
        path={`${match.path}/:userId`}
        render={({match}) => {
          // console.log(match);
          return (
            <div>
              <h3>userId: {match.params.userId}</h3>
            </div>
          );
        }}
      />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li><li>
              <Link to="/users">Users</Link></li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/
/*
import React, {Component} from "react";
// import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
import {BrowserRouter, Route, withRouter, Link} from 'react-router-dom';

const Admin = () => (
  <div>
    <h2>Admin Page - You are logged in now.</h2>
  </div>
);
/*
const Login = (props) => {
  // console.log(props.location);
  if (props.authenticated) {
    return (<Redirect to={{pathname: "/"}} />);
  } else {
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={props.onLoginBtnClick}>
          Login
        </button>
      </div>
    );
  }
};
*//*
class Login extends Component {
  componentDidMount() {
    // console.log("Login did mount.");
    
    // this is why we need an extra login func. inside <Login>
    
    if (this.props.authenticated) {
      this.props.history.push("/");
    }
  }
  login = () => {
    this.props.onLoginBtnClick();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}
/*
const Home = (props) => {
  // console.log(props.location);
  if (props.authenticated) {
    return (<Admin />);
  } else {
    return (
      <Redirect to={{pathname: "/login"}} />
    );
  }
};
*/
/*
class Home extends Component {
  componentDidMount() {
    // console.log("componentDidMount() got called after render().");
    if (!this.props.authenticated) {
      this.props.history.push("/login");
    }
  }
  render() {
    // console.log("render() got called before componentDidMount()");
    return <Admin />;
  }
}

const WithRouterLogin = withRouter(Login);
const WithRouterHome = withRouter(Home);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }
  componentDidMount() {
    const state = JSON.parse(localStorage.getItem("reactState")) || {};
    if (state.authenticated) {
      this.setState({ authenticated: true });
    }
  }
  onLoginBtnClick = () => {
    this.setState({ authenticated: true });
    localStorage.setItem("reactState", JSON.stringify({authenticated: true}));
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Route path="/" exact={true} 
            // render={() => <Home authenticated={this.state.authenticated} />}
            render={() => <WithRouterHome authenticated={this.state.authenticated} />}
          />
          <Route path="/login" 
            // render={() => <Login 
            render={() => <WithRouterLogin 
              authenticated={this.state.authenticated} 
              onLoginBtnClick={this.onLoginBtnClick}
            />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/
/*
import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

const Button = (props) => {
  console.log("props in Button:");
  console.log(props);
  return <button>Button</button>;
};
const WithRouterButton = withRouter(Button);

const About = (props) => {
  console.log("props in About:");
  console.log(props);
  return (
    <div>
      <h2>About Page</h2>
      <WithRouterButton />
    </div>
  );
};

const Users = (props) => {
  console.log("props in User:");
  console.log(props);
  return (
    <div>
      <h2>Users Page</h2>
      <WithRouterButton />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/
/*
import React, {Component} from "react";
import {BrowserRouter, Route, Redirect, Link, withRouter} from 'react-router-dom';

const Admin = () => (
  <div>
    <h2>Admin Page - You are logged in now.</h2>
  </div>
);

// class Home extends Component {
//   componentDidMount() {
//     if (!this.props.authenticated) {
//       this.props.history.push("/login");
//     }
//   }
//   render() {
//     return <Admin />;
//   }
// }

// user will still see the Admin Page first 
// even if the page will be redirected to "/login" 
// within a very short time.

class Home extends Component {
  render() {
    return this.props.authenticated ? (
      <Admin />
    ) : (
      <Redirect to={{pathname: "/login"}} />
    );
  }
}

class Login extends Component {
  login = () => {
    this.props.onLoginBtnClick();
    this.props.history.push('/');
  };
  render() {
    if (this.props.authenticated) {
      return <Redirect to={{pathname: "/"}} />;
    } else {
      return (
        <div>
          <h2>Login Page</h2>
          <button onClick={this.login}>Login</button>
        </div>
      );
    }
  }
}

const WithRouterLogin = withRouter(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }
  // componentDidMount() {
  //   const state = JSON.parse(localStorage.getItem("reactState")) || {};
  //   if (state.authenticated) {
  //     this.setState({ authenticated: true });
  //   }
  // }
  onLoginBtnClick = () => {
    this.setState({ authenticated: true });
    // localStorage.setItem("reactState", JSON.stringify({authenticated: true}));
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Route path="/" exact={true} 
            render={() => <Home authenticated={this.state.authenticated} />}
          />
          <Route path="/login" 
            // render={() => <Login 
            render={() => <WithRouterLogin 
              authenticated={this.state.authenticated} 
              onLoginBtnClick={this.onLoginBtnClick}
            />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/
/*
import React, {Component} from 'react';
// import axios from 'axios';
import { getUsers } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    // axios
    //   .get("http://api.haochuan.io/github/users")
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({ list: res.data });
    //   });
    getUsers()
      .then(res => {
        console.log(res.data);
        this.setState({ list: res.data });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item.login}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
*/
/*
import React, {Component} from "react";
import Panel from "./Panel";
import MovieBrowser from "./MovieBrowser";

function Movie(props) {
  return <div>{props.title}</div>;
}

class App extends Component {
  render() {
    return (
      <div>
        <Panel title="Browse for movies">
          <div>Movie stuff...c1</div>
          <div>Movie stuff...c2</div>
          <div>Movie stuff...c3</div>
          <div>Movie stuff...c4</div>
        </Panel>
        <br />
        {"Now playing: "}
        <MovieBrowser>
          <Movie title="Mad Max: Fury Road" />
          <Movie title="Harry Potter & The Goblet Of Fire" />
        </MovieBrowser>
      </div>
    );
  }
}

export default App;
*/

// class App extends Component {
//   render() {
//     return (
      
//     );
//   }
// }
/*
import React from "react";

// function getBtnText() {
//   return "Click";
// }

const App = function() {
  const btnText = ["Sub", "mit"];
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name: 
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'green', color: 'white' }}>{btnText}</button>
    </div>
  );
};

export default App;
*/
/*
import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    // <div>Demo</div>
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 8:00AM" postText="First post!" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Ben" timeAgo="Today at 10:00AM" postText="Second post" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Carl" timeAgo="Today at 12:00PM" postText="Third post" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

export default App;
// https://semantic-ui.com/
// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
*/
/*
import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: "" };
  }
  
  // state = { lat: null, errMsg: "" };
  
  componentDidMount() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  
  renderContent() {
    if (this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.lat) {
      // return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    // return <div>Loading...</div>;
    return <Spinner msg="Please accept the Location Request." />;
  }
  
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
*/

import React from "react";
// import axios from "axios
import unsplash from "./api/unsplash";

import SearchBar from "./SearchBar";

// const App = () => {
class App extends React.Component {
  state = { images: [] };
  
  // async onSearchSubmit(term) {
  onSearchSubmit = async (term) => {  
    
    // console.log(term);
    
    // GET /search/photos
    // Location
// The API is available at https://api.unsplash.com/. Responses are sent as JSON.
    // const res = await axios.get("/search/photos", {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // .then(res => {
    //   // console.log(res);
    //   console.log(res.data.results);
    // });
    
    // console.log(res.data.results);
    this.setState({ images: res.data.results });
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Results: {this.state.images.length} images found.
      </div>
    );
  }
}
// };

export default App;

// https://unsplash.com/developers
// https://unsplash.com/oauth/applications
// https://unsplash.com/documentation#search-photos

