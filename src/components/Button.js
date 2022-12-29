export const Button = ({
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn_${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
