import React from "react";
/**
 *
 * @param {String} label label for input
 * @param {React.State} value state varialbe to control the input
 * @param {String} placeholder placeholder value
 * @param {String} type type of input field. e.g. "text", "file", "password"
 * @param {Function} onChange function to change the state variable
 * @param {String} error error message for 'this' input filed
 * @returns - Input component which helps to auto show hide password field and helps to render the error messages
 */
export const Input = ({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  error = "",
  id,
}) => {
  return (
    <div className={`input-group ${error && "error"}`}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          id={id}
        />
      </div>
      <small className="input-error">{error || ""}</small>
    </div>
  );
};
