import React from "react";

export default function NewItemForm() {
  return (
    <main style={{ margin: "1em" }}>
      <h3>Create TinyURL</h3>
      <form className="form-inline" action="/urls" method="POST">
        <div className="form-group mb-2">
          <label htmlFor="longURL">Enter a URL:</label>
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
    </main>
  );
}
