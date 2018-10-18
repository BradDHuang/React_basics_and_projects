import React, { Component } from 'react';
import FlagChoices from "./FlagChoices";
import FlagAnswer from "./FlagAnswer";

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};

class FlagQuestion extends Component {
  static defaultProps = {
    options: []    
  }
  
  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined
    };
  }
  
  handleChange = e => {
      this.setState({ userChoice: Number(e.target.value) });
  }
  
  handleSubmit = e => {
      e.preventDefault();
      this.props.onGuess(this.state.userChoice);
  }
  
  render() {
    const {
      flag,
      questionState,
      options,
      answerText,
      onNext
    } = this.props;
    const { userChoice } = this.state;
    let opts = options.map(opt => ({
      ...opt,
      checked: userChoice === opt.id
    }));
    let output = questionState === QuestionStates.QUESTION ?
      (<FlagChoices 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        options={opts}
      />) : 
      (<FlagAnswer 
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        answer={answerText}
        onNext={onNext}
      />);
    return (
      <div>
        {output}
        <img src={flag} alt="Guess the flag" 
          style={{
            maxHeight: "65vh",
            maxWidth: "90%",
            border: "1px solid black",
            margin: "15px"
          }}
        />
      </div>
    );
  }
}

export default FlagQuestion;
export { QuestionStates };
