export default ({ src, children }) => {
  return (
    <div className="card">
      <img src="brand.png" alt="brand image" />
      {children}
    </div>
  );
};
