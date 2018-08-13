
import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter, Route, Switch, withRouter, Link} from "react-router-dom";
import "./style.css";
import Login from "../CodingWebLogin";

// var LocalStorageMixin = require('react-localstorage');

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { answer: "", rightAns: false, wrongAns: false };
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
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleAnswer = (e) => {
        this.setState({ answer: e.target.value });
    }
    validateAnswer = () => {
        let answer = this.state.answer;
        // let booleanAns = (answer === "true");
        // console.log(typeof(JSON.parse(`${answer}`)));
        // reset:
        this.setState({ rightAns: false });
        this.setState({ wrongAns: false });
        axios({
            method: "post",
            // url: "http://api.haochuan.io/oj/problems/:problemId/solution?noError=1",
            
            // get the specific problemId and pass it to the url:
            url: "http://api.haochuan.io/oj/problems/" + this.props.match.params.problemId + "/solution?noError=1",
            
            data: { answer: (`${answer}` === "true" ? true : false) }
        })
            .then(response => {
                console.log(response);
                // console.log(typeof(response.data.pass)); // boolean
                if (response.data.pass) {
                    this.setState({ rightAns: true });
                } else {
                    this.setState({ wrongAns: true });
                }
                // clean up input:
                this.setState({ answer: "" });
            })
            .catch(err => {
                console.log(err);
                this.setState({ answer: "" });
            });
    }
    render() {
        // const {id, title, content} = this.state;
        const {title, content} = this.state;
        return (
            // <p>{this.props.clicked? `Id: ${id}` : ""}</p>
            <form onSubmit={this.handleSubmit}>
                { !this.props.errorMsg &&
                <div className="details">
                    <h3>{this.props.clicked? `Title: ${title}` : ""}</h3>
                    <p>{this.props.clicked? `Content: ${content}` : ""}</p>
                    <hr />
                    <label>
                        Type your answer here:
                        <br />
                        <input type="text" value={this.state.answer} onChange={this.handleAnswer} />
                    </label>
                    <br />
                    <button type="submit" onClick={this.validateAnswer}>Submit Answer</button>
                    <br />
                    <Link to="/">Back</Link>
                    { this.state.rightAns &&
                        <div style={{color: "green"}}>
                            <br />
                            <h3>{"Your answer is right!"}</h3>
                        </div>
                    }
                    { this.state.wrongAns &&
                        <div style={{color: "red"}}>
                            <br />
                            <h3>{"Your answer is wrong, please try again."}</h3>
                        </div>
                    }
                </div>
                }
                { this.props.errorMsg && 
                    <div style={{color: "red"}}>
                        <br />
                        {"Error: Request failed with status code 500 (Internal Server Error)! Please refresh the page and try again later."}
                    </div> 
                }
            </form>
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







