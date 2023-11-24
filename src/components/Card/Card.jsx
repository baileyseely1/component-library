export default ({ src, children }) => {
  return (
    <div className="card">
      <img src={src} alt="brand image" />
      {children}
    </div>
  );
};
