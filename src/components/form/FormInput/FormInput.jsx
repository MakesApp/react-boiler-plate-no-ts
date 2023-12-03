import React from "react";
import * as S from "./FormInput.styles.js";

const FormInput = ({ label, onInputChange, ...props }) => {
  const handleChange = (event) => {
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <S.Input {...props} onChange={handleChange} />
    </div>
  );
};

export default FormInput;
