
import React, {Component} from "react";
import "./style.css";

import Vote from "../Vote";

let index = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: []
        };
    }
    
    addVote = (name, desc) => {
        const vote = { name: name, desc: desc, numOfVotes: 0, id: index++ };
        let cur = this.state.votes;
        cur.push(vote);
        this.setState({ votes: cur });
    }
    inc = (id) => {
        const {votes} = this.state;
        this.setState({ votes: [...votes.slice(0, id), 
                           {...votes[id], numOfVotes: votes[id].numOfVotes + 1}, 
                            ...votes.slice(id + 1)]
                 });
        // this.setState({ numOfVotes: this.state.numOfVotes + 1 });
    }
    dec = (id) => {
        const {votes} = this.state;
        this.setState({ votes: [...votes.slice(0, id), 
                           {...votes[id], numOfVotes: votes[id].numOfVotes - 1}, 
                            ...votes.slice(id + 1)]
                 });
        // this.setState({ numOfVotes: this.state.numOfVotes - 1 });
    }
    
    render() {
        const {votes} = this.state;
        return (
            <div>
                <Vote addVote={this.addVote}/>
                <div>
                    <ul>
                      {votes.map((vote, index) => {
                        return (<li key={vote.id} className="vote">
                                    <span className="spans">
                                        <button onClick={ () => this.inc(vote.id) }><i className="fas fa-chevron-up"></i></button>
                                        <div className="numOfVotes">{vote.numOfVotes}</div>
                                        <button onClick={ () => this.dec(vote.id) }><i className="fas fa-chevron-down"></i></button>
                                    </span>
                                    <span className="spans">
                                        <h2 className="txt">{vote.name}</h2>
                                        <h3 className="txt">{vote.desc}</h3>
                                    </span>
                                </li>);
                      })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;







