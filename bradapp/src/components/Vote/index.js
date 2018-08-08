
import React, {Component} from "react";

import "./style.css"

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        let input1;
        let input2;
        return (
            <div className="newVoteForm">
                <h3>
                    <label>New Vote Name<input className="inputval" ref={ node1 => input1 = node1 } /></label>
                </h3>
                <h3>
                    <label>Description<input className="inputval" ref={ node2 => input2 = node2 } /></label>
                </h3>
                <button onClick={ () => {this.props.addVote(input1.value, input2.value); 
                                        input1.value = "";
                                        input2.value = "";
                                        } 
                                }>Add a New Vote</button>
            </div>
        );
    }
}

export default Vote;









