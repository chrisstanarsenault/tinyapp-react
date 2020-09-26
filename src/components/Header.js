import React from "react";

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
            <a className="nav-item nav-link" href="/urls">
              My URLs
            </a>
            <a className="nav-item nav-link" href="/urls/new">
              Create New URL
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
