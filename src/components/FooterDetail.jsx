import React from "react";

export const FooterDetail = ({ handleCardClick, value }) => {
  return (
    <>
      <div className="flex-grow-1 d-flex justify-content-start">
        {
          <button
            disabled={value <= 1}
            className="btn btn-light"
            onClick={() => handleCardClick(+value - 1)}
          >
            <i className="bi bi-caret-left-fill large-icon"></i>
          </button>
        }
      </div>
      <div className="flex-grow-1 d-flex justify-content-end">
        {
          <button
            disabled={value >= 1025}
            className="btn btn-light"
            onClick={() => handleCardClick(+value + 1)}
          >
            <i className="bi bi-caret-right-fill large-icon"></i>
          </button>
        }
      </div>
    </>
  );
};
