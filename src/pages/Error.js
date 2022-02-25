import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! this is a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Go to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
