import React from "react";

export default function LoggedInName(props) {
  return (
    <div style={{ display: "flex" }}>
      <p style={{ display: "inline", marginTop: "16px", marginRight: "1em" }}>
        Logged in as: {props.username}
      </p>
      <form
        className="form-inline"
        action={`http://localhost:8080/logout`}
        method="POST"
      >
        <button type="submit" className="btn btn-outline-dark">
          Log Out
        </button>
      </form>
    </div>
  );
}
