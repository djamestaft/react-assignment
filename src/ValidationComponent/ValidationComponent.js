import React from 'react';

const validationComponent = (props) => {
  let validationMessage = "text long enough";

  if (props.userInput <= 5) {
    validationMessage = "text too short";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validationComponent;
