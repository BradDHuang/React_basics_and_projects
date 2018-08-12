
import React, {Component} from "react";
import axios from "axios";

class App extends Component {
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
    render() {
        return (
            <div>
                <ul>
                    { this.state.questions.map((item, index) => {
                        return <li key={index}>{item.title}</li>;
                    }) }
                </ul>
            </div>
        );
    }
}

export default App;







