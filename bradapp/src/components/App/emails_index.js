
import React, {Component} from "react";
import axios from "axios";

function Subject(props) {
    return (
        <ul>
            <li onClick={props.clickedASubject}>{props.subject}</li>
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {emails: [], inbox: 0, inboxs: [], deleted: 0, deleteds: [], sent: 0, sents: [], 
            drafts: 0, draftsList:[], showMsg: false, displays: [], showDetails: false,
            subject: "", from: "", time: "", message: ""
        };
    }
    componentDidMount() {
        axios({method: "get", url: "http://api.haochuan.io/emails"})
            .then(response => {
                console.log(response);
                this.setState({emails: response.data.emailData});
                this.state.emails.forEach((email) => {
                    if (email.tag === "inbox") {
                        if (email.read === "false") {
                            this.setState({ inbox: this.state.inbox + 1 });
                        }
                        this.setState({ inboxs: [...this.state.inboxs, email] });
                    } else if (email.tag === "deleted") {
                        this.setState({ deleted: this.state.deleted + 1 });
                        this.setState({ deleteds: [...this.state.deleteds, email] });
                    } else if (email.tag === "sent") {
                        this.setState({ sent: this.state.sent + 1 });
                        this.setState({ sents: [...this.state.sents, email] });
                    } else if (email.tag === "drafts") {
                        this.setState({ drafts: this.state.drafts + 1 });
                        this.setState({ draftsList: [...this.state.draftsList, email] });
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
    clickedASubject = (email) => {
        console.log(email);
        
        // ******
        console.log(email.subject);
        // ******
        
        this.setState({ showDetails: true });
        this.setState({ subject: email.subject });
        this.setState({ from: email.from });
        this.setState({ time: email.time });
        this.setState({ message: email.message });
    }
    render() {
        return (
            <div>
                {this.state.showMsg && "Nothing here."}
                {!this.state.showMsg && 
                    <div>
                        {this.state.displays.map((email, index) => {
                            return <Subject key={index} {...email} 
                                clickedASubject={() => 
                                    this.clickedASubject(email)
                                } />;
                        })}
                    </div>
                }
                {(!this.state.showMsg && this.state.showDetails) && 
                    <div>
                        <h3>{this.state.subject}</h3>
                        <p>{this.state.from}</p>
                        <p>{this.state.time}</p>
                        <hr />
                        <p>{this.state.message}</p>
                    </div>
                }
                <div>
                    <ul>
                        <li onClick={ () => this.handleInboxClick()}>Inbox: {this.state.inbox}</li>
                        <li onClick={ () => this.handleSentClick()}>Sent: {this.state.sent}</li>
                        <li onClick={ () => this.handleDraftsClick()}>Drafts: {this.state.drafts}</li>
                        <li onClick={ () => this.handleTrashClick()}>Trash: {this.state.deleted}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;









