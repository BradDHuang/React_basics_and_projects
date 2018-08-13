
import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter, Route, Switch, withRouter, Link} from "react-router-dom";
import "./style.css";
import Login from "../CodingWebLogin";

// var LocalStorageMixin = require('react-localstorage');

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push("/login");
        } else {
            axios({ method: "get", 
                    // url: "http://api.haochuan.io/oj/problems/" + this.props.match.params.problemId
                    url: "http://api.haochuan.io/oj/problems/" + this.props.match.params.problemId + "?noError=1"
            })
                .then(response => {
                    console.log(response);
                    this.setState({ id: response.data.question.id });
                    this.setState({ title: response.data.question.title });
                    this.setState({ content: response.data.question.content });
                })
                .catch(err => {
                    console.log(err);
                    // alert(err);
                    this.props.showErrorMsg();
                });
        }
    }
    render() {
        const {id, title, content} = this.state;
        return (
            <div>
                { !this.props.errorMsg &&
                <div className="details">
                    <h3>{this.props.clicked? `Title: ${title}` : ""}</h3>
                    <p>{this.props.clicked? `Id: ${id}` : ""}</p>
                    <p>{this.props.clicked? `Content: ${content}` : ""}</p>
                    <br />
                    <Link to="/">Back</Link>
                </div>
                }
                { this.props.errorMsg && 
                    <div style={{color: "red"}}>
                        <br />
                        {"Error: Request failed with status code 500 (Internal Server Error)! Please refresh the page and try again later."}
                    </div> 
                }
            </div>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
    }
    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push("/login");
        } else {
        
        // Run on http://react-basics-and-projects-happitt.c9users.io/
        // vs. https
        
            // axios({ method: "get", url: "http://api.haochuan.io/oj/problems" })
            axios({ method: "get", url: "http://api.haochuan.io/oj/problems?noError=1" })
                .then(response => {
                    console.log(response);
                    this.setState({ questions: response.data.questions });
                })
                .catch(err => {
                    console.log(err);
                    // alert(err);
                    this.props.showErrorMsg();
                });
        }
    }
    showDetails(id) {
        this.props.clickedAProblem();
        this.props.history.push(`/${id}`);
    }
    render() {
        return (
            <div>
                { !this.props.errorMsg &&
                    <div>
                        <ul>
                            { this.state.questions.map((item, index) => {
                                return <li className="question" key={index} onClick={() => this.showDetails(item.id)}>{item.title}</li>;
                            }) }
                        </ul>
                    </div>
                }
                { this.props.errorMsg && 
                    <div style={{color: "red"}}>
                        <br />
                        {"Error: Request failed with status code 500 (Internal Server Error)! Please refresh the page and try again later."}
                    </div> 
                }
            </div>
        );
    }
}

const WithRouterHome = withRouter(Home);
const WithRouterDetails = withRouter(Details);
const WithRouterLogin = withRouter(Login);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { clickedAProblem: false, authenticated: false, errorMsg: false };
    }
    
    // mixins = [LocalStorageMixin];
    
    clickedAProblem = () => {
        this.setState({ clickedAProblem: true });
    }
    loginHandler = () => {
        this.setState({ authenticated: true });
    }
    showErrorMsg = () => {
        this.setState({ errorMsg: true });
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact={true} path="/"
                            render={ () => (<WithRouterHome 
                                clickedAProblem={this.clickedAProblem}
                                authenticated={this.state.authenticated}
                                showErrorMsg={this.showErrorMsg}
                                errorMsg={this.state.errorMsg}
                            />) }
                        />
                        <Route path="/login" 
                            render={ () => (<WithRouterLogin 
                                loginHandler={this.loginHandler}
                                authenticated={this.state.authenticated}
                            />) }
                        />
                        <Route path="/:problemId"
                            render={ ({match}) => (<WithRouterDetails 
                                match={match}
                                clicked={this.state.clickedAProblem}
                                authenticated={this.state.authenticated}
                                showErrorMsg={this.showErrorMsg}
                                errorMsg={this.state.errorMsg}
                            />) }
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;







