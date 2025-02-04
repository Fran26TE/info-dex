export const Pagination = ({
  currentPage,
  totalPages,
  getPageNumbers,
  paginate,
}) => {
  return (
    <nav className="pt-3 pb-5">
      <ul className="pagination justify-content-center p-2 bg-light border border-dark rounded">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {getPageNumbers().map((number, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => paginate(number)}
              disabled={number === "..."}
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
