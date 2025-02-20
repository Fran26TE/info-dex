export const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
