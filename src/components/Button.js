export const Button = ({ variant = "primary", children }) => {
  return <button className={`btn btn_${variant}`}>{children}</button>;
};
