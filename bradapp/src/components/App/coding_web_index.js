
import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import "./style.css";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    componentDidMount() {
        axios({ method: "get", 
                url: "http://api.haochuan.io/oj/problems/" + this.props.match.params.problemId
        })
        .then(response => {
            console.log(response);
            this.setState({ id: response.data.question.id });
            this.setState({ title: response.data.question.title });
            this.setState({ content: response.data.question.content });
        })
        .catch(err => {
            console.log(err);
            alert(err);
        });
    }
    render() {
        const {id, title, content} = this.state;
        return (
            <div className="details">
                <h3>{this.props.clicked? `Title: ${title}` : ""}</h3>
                <p>{this.props.clicked? `Id: ${id}` : ""}</p>
                <p>{this.props.clicked? `Content: ${content}` : ""}</p>
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
        
        // Run on http://react-basics-and-projects-happitt.c9users.io/
        // vs. https
        
        axios({ method: "get", url: "http://api.haochuan.io/oj/problems" })
            .then(response => {
                console.log(response);
                this.setState({ questions: response.data.questions });
            })
            .catch(err => {
                console.log(err);
                alert(err);
            });
    }
    showDetails(id) {
        this.props.clickedAProblem();
        this.props.history.push(`/${id}`);
    }
    render() {
        return (
            <div>
                <ul>
                    { this.state.questions.map((item, index) => {
                        return <li className="question" key={index} onClick={() => this.showDetails(item.id)}>{item.title}</li>;
                    }) }
                </ul>
            </div>
        );
    }
}

const WithRouterHome = withRouter(Home);
const WithRouterDetails = withRouter(Details);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { clickedAProblem: false };
    }
    clickedAProblem = () => {
        this.setState({ clickedAProblem: true });
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact={true} path="/"
                            render={ () => (<WithRouterHome 
                                clickedAProblem={this.clickedAProblem}
                            />) }
                        />
                        <Route path="/:problemId"
                            render={ ({match}) => (<WithRouterDetails 
                                match={match}
                                clicked={this.state.clickedAProblem}
                            />) }
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;







