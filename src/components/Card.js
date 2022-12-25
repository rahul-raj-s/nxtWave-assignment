export const Card = ({ title, iconUrl }) => {
  return (
    <div className="card">
      <div>
        <img src={iconUrl} height="20px" width="20px"/>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
