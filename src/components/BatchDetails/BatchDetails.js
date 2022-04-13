import React from "react";
import { Link, useLocation } from "react-router-dom";

function BatchDetails() {
  const location = useLocation();
  const batchDetails = location.state.batch;
  console.log(batchDetails);
  return (
    <div>
      <Link to="/batch">
        <i className="bi bi-arrow-left"></i>
        <span className="ms-1 d-inline-block">Back</span>
      </Link>
      <h1>Hello From Batch Details</h1>
    </div>
  );
}

export default BatchDetails;
