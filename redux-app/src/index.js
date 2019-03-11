// import {createStore} from "redux";
// import React from "react";
// import { Provider } from "react-redux";
// import ReactDOM from 'react-dom';
// // import "./style.css";
// import App from './components/App';
// import reducers from './reducers';

// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from "redux";

/*
const questions = [{
  "id": 1,
  "text": "Favorite color",
  "answers": [{
    "id": 1,
    "text": "Red",
    "responses": 10
  }, {
    "id": 2,
    "text": "Green",
    "responses": 20
  }, {
    "id": 3,
    "text": "Blue",
    "responses": 5
  }]
}, {
  "id": 2,
  "text": "Favorite animal",
  "answers": [{
    "id": 1,
    "text": "Dog",
    "responses": 150
  }, {
    "id": 2,
    "text": "Cat",
    "responses": 100
  }, {
    "id": 3,
    "text": "Bird",
    "responses": 17
  }]
}];

const questionReducer = (state = questions, action) => {
    switch (action.type) {
        case 'ANS_PICKED':
            const { questionID, answerID } = action;
            return state.map((q) => {
                // console.log(typeof questionID, typeof q.id); // number number
                if (questionID === (q.id - 1)) {
                    q.answers.map((a) => {
                        // console.log(typeof answerID, typeof a.id); // string number
                        if (parseInt(answerID, 10) === a.id) {
                            // The matching question/answer's responses should be incremented.
                            // console.log(a.responses);
                             let updatedAns = Object.assign( a, {"responses": a.responses + 1} );
                             return updatedAns;
                        } 
                        return a;
                        
                    });
                    // return { ...q, answers };
                } 
                return q;
                
            });
        
        default:
            return state;
    }
};

const store = createStore(questionReducer);

class Text extends Component {
    render() {
        const { question, answerID } = this.props;
        const id = answerID - 1;
        return (
            <div>
                <div className="question">
                    <h3>You selected: {question.answers[id].text}</h3>
                </div>
                <div>
                    <div className="question">{"Responses:"}</div>
                    {question.answers.map((a) => (
                        <div key={a.id} className="answers">
                            {`${a.text}: ${a.responses}`}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { answerID: undefined, showMsg: false };
    }
    onAnsPick = e => {
        // console.log(typeof(e.target.value)); // string
        // console.log(e.target.value); 
        this.setState({ answerID: e.target.value, showMsg: false });
    }
    onSubmit = e => {
        e.preventDefault();
        const { answerID } = this.state;
        // console.log(answerID);
        if (answerID !== undefined) {
            this.props.checkAns(this.props.questionID, answerID);
            this.props.submitAns(answerID);
        } else {
            this.setState({ showMsg: true });
        }
    }
    render() {
        return(
            <div>
                <p className="question">{`${this.props.question.text} ?`}</p>
                <form onSubmit={this.onSubmit}>
                    {this.props.question.answers.map(a => (
                        <label key={a.id} className="answers">
                            {a.text}
                            <input 
                                type="radio"
                                name="answer"
                                value={a.id}
                                onClick={this.onAnsPick}
                            />
                        </label>
                    ))}
                    <div>
                        {!this.props.btnDisabled &&
                            <button type="submit" 
                                className="submit_btn"
                            >
                                Submit
                            </button>
                        }
                    </div>
                </form>
                {this.state.showMsg &&
                    <p className="warning_msg">
                        {"Please make a choice before submitting, thanks."}
                    </p>
                }
            </div>
        );
    }
}

const randomPick = len => {
    return Math.floor(Math.random() * len);
};

class AppPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionID: randomPick(props.questions.length),
            answerID: undefined,
            ansSubmitted: false
        };
    }
    submitAns = (answerID) => {
        this.setState({ ansSubmitted: true, answerID });
    }
    render() {
        const { questionID, answerID, ansSubmitted } = this.state;
        return(
            <div className="app_page">
                {ansSubmitted &&
                    <Text 
                        question={this.props.questions[questionID]}
                        answerID={answerID}
                    />
                }
                <Form 
                    question={this.props.questions[questionID]}
                    checkAns={this.props.checkAns}
                    questionID={questionID}
                    submitAns={this.submitAns}
                    btnDisabled={ansSubmitted}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { questions: state };
};

const mapDispatchToProps = dispatch => {
    return { 
        checkAns: (questionID, answerID) => {
            dispatch({
                type: "ANS_PICKED",
                questionID,
                answerID
            });
        } 
    };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppPage);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
*/
/*
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
*/
/*
import React from "react";
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
*/

import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

