import classnames from "classnames";

export default ({ children, variant, className }) => {
  let title;
  let icon;
  let variantClass = variant && `banner-${variant}`;
  const allClasses = classnames(variantClass, className);

  switch (variant) {
    case "success":
      title = "Congratulations!";
      icon = <img src="check.png" alt="circle with check" />;
      break;

    case "warning":
      title = "Attention";
      icon = <img src="excplaim.png" alt="yellow exclamation mark" />;
      break;

    case "error":
      title = "There is a problem with your application";
      icon = <img src="x.png" alt="x error symbol" />;
      break;

    case "neutral":
      title = "Update available";
      icon = <img src="info.png" alt="information icon" />;
      break;

    default:
      break;
  }

  return (
    <div className={allClasses}>
      {icon}
      <div className="banner-content">
        <p
          className="banner-title"
          style={variant === "error" ? { fontWeight: 700 } : {}}
        >
          {title}
        </p>
        <p>{children}</p>
      </div>
    </div>
  );
};
