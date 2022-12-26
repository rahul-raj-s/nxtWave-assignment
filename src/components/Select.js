export const Select = ({
  label,
  children,
  error,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className={`input-group ${error && "error"}`}>
      <label>{label}</label>
      <div className="input-wrapper">
        <select placeholder={placeholder} value={value} onChange={onChange}>
          {children}
        </select>
      </div>
      <small className="input-error">{error || ""}</small>
    </div>
  );
};
