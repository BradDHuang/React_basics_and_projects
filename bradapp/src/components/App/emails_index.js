
import React, {Component} from "react";
import axios from "axios";

function List(props) {
  return (
    <tr>
      <td>{props.from}</td>
      <td>{props.address}</td>
    </tr>
  );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {emails: []};
    }
    componentDidMount() {
        axios({method: "get", url: "http://api.haochuan.io/emails"})
            .then(response => {
                console.log(response.data);
                this.setState({emails: response.data.emailData});
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <table>
                <tbody>
                    {this.state.emails.map((email, index) => {
                        return <List key={index} {...email} />;
                    })}
                </tbody>
            </table>
        );
    }
}

export default App;









