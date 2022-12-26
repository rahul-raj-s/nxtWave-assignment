export const TextArea = ({
  label,
  value,
  placeholder,
  onChange,
  error = "",
}) => {
  return (
    <div className={`input-group ${error && "error"}`}>
      <label>{label}</label>
      <div className="input-wrapper">
        <textarea placeholder={placeholder} value={value} onChange={onChange} />
      </div>
      <small className="input-error">{error || ""}</small>
    </div>
  );
};
