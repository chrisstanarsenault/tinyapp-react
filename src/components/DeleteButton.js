import React from "react";

export default function DeleteButton(props) {
  return (
    <form
      method="POST"
      action={`http://localhost:8080/urls/${props.keyName}/delete`}
    >
      <button type="submit" className="btn btn-outline-danger">
        Delete
      </button>
    </form>
  );
}
