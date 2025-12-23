import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center  Spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "3rem", width: "3rem" }}
      >
        <span className="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Spinner;
