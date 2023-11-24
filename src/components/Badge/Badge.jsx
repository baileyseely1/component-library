import classnames from "classnames";

export default ({ children, color, shape, className }) => {
  let colorClass = color && `badge-${color}`;
  let shapeClass = shape && `badge-${shape}`;
  const allClasses = classnames(className, colorClass, shapeClass);

  return <div className={allClasses}>{children}</div>;
};
