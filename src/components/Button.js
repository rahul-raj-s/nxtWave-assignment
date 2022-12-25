export const Button = ({ variant = "primary", className = "", children }) => {
  return (
    <button className={`btn btn_${variant} ${className}`}>{children}</button>
  );
};
