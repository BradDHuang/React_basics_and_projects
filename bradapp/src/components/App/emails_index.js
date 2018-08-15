
import React, {Component} from "react";
import axios from "axios";

function Subject(props) {
    return (
        <ul>
            <li onClick={props.clickedASubject} 
                style={{color: (props.read === "false") ? "black" : "grey"}}>{props.subject}</li>
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {emails: [], inbox: 0, inboxs: [], deleted: 0, deleteds: [], sent: 0, sents: [], 
            drafts: 0, draftsList:[], showMsg: false, displays: [], showDetails: false,
            subject: "", from: "", time: "", message: "", withButton: true, email: {}
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
                            this.setState({ inboxs: [...this.state.inboxs, {...email, read: "false"}] });
                        } else {
                            this.setState({ inboxs: [...this.state.inboxs, {...email, read: "true"}] });
                        }
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
        // clean up when change into a different tag.
        this.setState({ showDetails: false });
        this.setState({ withButton: true });
        
        if (this.state.inbox === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.inboxs });
        }
    }
    handleSentClick = () => {
        this.setState({ showDetails: false });
        this.setState({ withButton: true });
        if (this.state.sent === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.sents });
        }
    }
    handleDraftsClick = () => {
        this.setState({ showDetails: false });
        this.setState({ withButton: true });
        if (this.state.drafts === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.draftsList });
        }
    }
    handleTrashClick = () => {
        this.setState({ showDetails: false });
        this.setState({ withButton: false });
        if (this.state.deleted === 0) {
            this.setState({ showMsg: true });
        } else {
            this.setState({ showMsg: false });
            this.setState({ displays: this.state.deleteds });
        }
    }
    clickedASubject = (email, index) => {
        if (email.read === "false") {
            /*
            this.setState({ inboxs: [
                    ...this.state.inboxs.slice(0, index), 
                    {...this.state.inboxs[index], read: "true"},
                    ...this.state.inboxs.slice(index + 1)
                ] });
            */ // Async.
            this.setState({ inbox: this.state.inbox - 1 });
            
        } 
        console.log("index: " + index);
        let emailWithIndex = {...email, index};
        // console.log(emailWithIndex);
        this.setState({ email: emailWithIndex });
        
        // console.log(email);
        
        // ******
        // console.log(email.subject);
        // ******
        
        this.setState({ showDetails: true });
        this.setState({ subject: email.subject });
        this.setState({ from: email.from });
        this.setState({ time: email.time });
        this.setState({ message: email.message });
    }
    deleteEmail = (email) => {
        this.setState({ deleted: this.state.deleted + 1 });
        console.log(email.index, email.tag); // setState() is async.
        this.setState({ deleteds: [
                    ...this.state.deleteds, 
                    {...email, tag: "deleted", read: "true"}
                ] });
        this.setState({ inboxs: [...this.state.inboxs.slice(0, email.index), ...this.state.inboxs.slice(email.index + 1)] });

        setTimeout(() => this.handleInboxClick(), 1000);
    }
    render() {
        return (
            <div style={{display: "flex"}}>
                <div>
                    <ul>
                        <li onClick={ () => this.handleInboxClick()}>Inbox: {this.state.inbox}</li>
                        <li onClick={ () => this.handleSentClick()}>Sent: {this.state.sent}</li>
                        <li onClick={ () => this.handleDraftsClick()}>Drafts: {this.state.drafts}</li>
                        <li onClick={ () => this.handleTrashClick()}>Trash: {this.state.deleted}</li>
                    </ul>
                </div>
                <div>
                    <br />
                    {this.state.showMsg && "Nothing here."}
                </div>
                {!this.state.showMsg && 
                    <div>
                        {this.state.displays.map((email, index) => {
                            return <Subject key={index} {...email} 
                                    clickedASubject={() => 
                                        this.clickedASubject(email, index)} 
                                    read={email.read}
                                />;
                        })}
                    </div>
                }
                {(!this.state.showMsg && this.state.showDetails) && 
                    <div>
                        <h3>{this.state.subject}</h3>
                        <p>{this.state.from}</p>
                        <p>{this.state.time}</p>
                        {this.state.withButton &&
                            <button onClick={() => this.deleteEmail(this.state.email)}><i className="fas fa-trash-alt"></i></button>
                        }
                        <hr />
                        <p>{this.state.message}</p>
                    </div>
                }
            </div>
        );
    }
}

export default App;









