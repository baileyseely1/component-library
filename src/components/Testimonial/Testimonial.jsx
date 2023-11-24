export default ({ src, children, name, title, logo }) => {
  if (src) {
    return (
      <div className="testi">
        <img className="testi-hero-img" src={src} />
        <div className="testi-content">
          <img src="quote.png" alt="quote icon" />
          <p className="testi-desc">{children}</p>
          <p className="testi-name">{name}</p>
          <p className="testi-work">{title}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="testi" style={{ background: "white", color: "black" }}>
        <div className="nopic-testi-content">
          <img src={logo} alt="company logo" width="165px" height="35px" />
          <p style={{ fontSize: "1.33rem", lineHeight: "35px" }}>
            "{children}"
          </p>
          <p style={{ fontWeight: "400", fontSize: "1.2rem" }}>
            {name}
            <span style={{ color: "blue" }}> / </span>
            <span style={{ color: "gray" }}>{title}</span>
          </p>
        </div>
      </div>
    );
  }
};
