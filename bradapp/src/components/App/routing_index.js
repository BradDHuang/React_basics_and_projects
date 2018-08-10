
import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  withRouter,
  Link,
  Switch,
} from 'react-router-dom';

/* Admin component */
const Admin = () => (
  <div>
    <h2>Admin Page - After login</h2>
  </div>
);

class Login extends Component {
  componentDidMount() {
    console.log("Login componentDidMount() called.");
    if (this.props.authenticated) {
      this.props.history.push('/');
    }
  }
  login = () => {
    this.props.loginHandler();
    this.props.history.push('/');
  };
  render() {
    console.log("Login render() called.");
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
class Home extends Component {
  componentDidMount() {
    console.log("Home componentDidMount() called.");
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  }
  render() {
    console.log("Home render() called.");
    return <Admin />;
  }
}

const WithRouterLogin = withRouter(Login);
const WithRouterHome = withRouter(Home);

/* App component */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }
  loginHandler = () => {
    this.setState({authenticated: true});
  };
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
            <Route
              exact={true}
              path="/"
              render={() => (
                <WithRouterHome authenticated={this.state.authenticated} />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <WithRouterLogin
                  authenticated={this.state.authenticated}
                  loginHandler={this.loginHandler}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;





