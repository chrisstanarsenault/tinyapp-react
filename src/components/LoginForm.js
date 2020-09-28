import React from "react";

export default function LoginForm() {
  return (
    <form
      className="form-inline"
      action={`http://localhost:8080/login`}
      method="POST"
    >
      <div className="form-group mb-2">
        <label htmlFor="username">Enter Your Username:</label>
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="JohnDoe"
          style={{ width: "300px", margin: "1em" }}
        />
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </div>
    </form>
  );
}
