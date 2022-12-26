export const Select = ({
  label,
  children,
  error,
  value,
  placeholder,
  onChange,
  id,
}) => {
  return (
    <div className={`input-group ${error && "error"}`}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <select
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
        >
          {children}
        </select>
      </div>
      <small className="input-error">{error || ""}</small>
    </div>
  );
};
