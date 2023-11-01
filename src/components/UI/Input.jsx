import React from "react";

function Input({ label, id, ...rest }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...rest} />
    </p>
  );
}

export default Input;
