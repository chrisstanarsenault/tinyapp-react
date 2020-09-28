import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoggedInName from "./LoggedInName";

export default function Header() {
  const isLoggedIn = (cb) => {
    const value = cb;
    console.log(value);
    if (value) {
      return <LoggedInName username={value} />;
    } else {
      return <LoginForm />;
    }
  };

  // returns the cookie with the given name,
  // or undefined if not found
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

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
        {isLoggedIn(getCookie("username"))}
      </nav>
    </header>
  );
}
