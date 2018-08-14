
import React, {Component} from "react";
import axios from "axios";

function List(props) {
  return (
    <tr>
      <td>{props.from}</td>
      <td>{props.address}</td>
      <td>{props.tag}</td>
      <td>{props.read}</td>
      <td>{props.subject}</td>
    </tr>
  );
}
function Subject(props) {
    return (
        <ul>
            <li>{props.subject}</li>
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {emails: [], inbox: 0, inboxs: [], deleted: 0, deleteds: [], sent: 0, sents: [], drafts: 0, draftsList:[], showMsg: false, displays: []};
    }
    componentDidMount() {
        axios({method: "get", url: "http://api.haochuan.io/emails"})
            .then(response => {
                console.log(response.data);
                this.setState({emails: response.data.emailData});
                this.state.emails.forEach((email) => {
                    if (email.tag === "inbox") {
                        if (email.read === "false") {
                            this.setState({ inbox: this.state.inbox + 1 });
                        }
                        this.setState({ inboxs: [...this.state.inboxs, {subject: email.subject}] });
                    } else if (email.tag === "deleted") {
                        this.setState({ deleted: this.state.deleted + 1 });
                        this.setState({ deleteds: [...this.state.deleteds, {subject: email.subject}] });
                    } else if (email.tag === "sent") {
                        this.setState({ sent: this.state.sent + 1 });
                        this.setState({ sents: [...this.state.sents, {subject: email.subject}] });
                    } else if (email.tag === "drafts") {
                        this.setState({ drafts: this.state.drafts + 1 });
                        this.setState({ draftsList: [...this.state.draftsList, {subject: email.subject}] });
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleInboxClick = () => {
        if (this.state.inbox === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.inboxs });
        }
    }
    handleSentClick = () => {
        if (this.state.sent === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.sents });
        }
    }
    handleDraftsClick = () => {
        if (this.state.drafts === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.draftsList });
        }
    }
    handleTrashClick = () => {
        if (this.state.deleted === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.deleteds });
        }
    }
    render() {
        return (
            <div>
            {this.state.showMsg && "Nothing here."}
            {!this.state.showMsg && 
                <div>
                    {this.state.displays.map((email, index) => {
                        return <Subject key={index} {...email} />;
                    })}
                </div>
            }
            <table>
                <thead>
                    <tr>
                        <td onClick={ () => this.handleInboxClick()}>Inbox: {this.state.inbox}</td>
                        <td onClick={ () => this.handleSentClick()}>Sent: {this.state.sent}</td>
                        <td onClick={ () => this.handleDraftsClick()}>Drafts: {this.state.drafts}</td>
                        <td onClick={ () => this.handleTrashClick()}>Trash: {this.state.deleted}</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.emails.map((email, index) => {
                        return <List key={index} {...email} />;
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default App;









