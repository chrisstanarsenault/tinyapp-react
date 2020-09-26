import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        <a className="navbar-brand" href="/urls">
          TinyApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/urls" className="nav-item nav-link">
              My URLs
            </Link>

            <Link className="nav-item nav-link" to="/urls/new">
              Create New URL
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
