export const Button = ({
  variant = "primary",
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button className={`btn btn_${variant} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};
