export const Card = ({ title, iconUrl, subtitle, link, description, tag }) => {
  return (
    <div className="card">
      <div className="card_header">
        <img src={iconUrl} className="card_icon" />
        <div>
          <h1 className="cart_title">{title}</h1>
          <small>{subtitle}</small>
        </div>
      </div>
      <small>{tag}</small>
      <a href={link} className="card_link">
        {link}
      </a>
      <p className="card_description">{description}</p>
    </div>
  );
};
