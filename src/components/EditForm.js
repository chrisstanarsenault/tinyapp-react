import React from "react";

export default function EditForm(props) {
  return (
    <div>
      <h3>EDIT</h3>
      <form
        className="form-inline"
        action={`http://localhost:8080/urls/${props.shortURL}`}
        method="POST"
      >
        <div className="form-group mb-2">
          <label htmlFor="longURL">Enter New URL:</label>
          <input
            className="form-control"
            type="text"
            name="longURL"
            placeholder="https://"
            style={{ width: "300px", margin: "1em" }}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
