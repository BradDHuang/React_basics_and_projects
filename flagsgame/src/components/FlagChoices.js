import React from 'react';
import StyleButton from "./StyleButton";

const FlagChoices = props => {
  let options = props.options || [];
  const { handleChange, handleSubmit } = props;
  let inputs = options.map(opt => (
    <label key={opt.id}>
      <input 
        type="radio"
        value={opt.id}
        checked={opt.checked}
        onChange={handleChange}
        name="falg-choice"
      />
      {opt.name}
    </label>
  ));
  return (
    <form onSubmit={handleSubmit}
      style={{
        display: "flex",
        maxWidth: "1000px",
        margin: "0 auto",
        justifyContent: "space-around",
        fontSize: "1.3em"
      }}
    >
      {inputs}
      <StyleButton text="GUESS" type="sumit" />
    </form>
  );
};

export default FlagChoices;