import React from 'react';
import StyleButton from "./StyleButton";

const FlagAnswer = ({ correct, answer, onNext }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.3em",
    }}
  >
    {correct ? 
      `Correct! ${answer}.` :
      `Incorrect! Correct answer: ${answer}.`
    }
    <StyleButton text="NEXT" onClick={onNext} />
  </div>
);
  
export default FlagAnswer;